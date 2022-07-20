import type { NextPage, GetStaticProps } from 'next'
import Skill from '../components/Skill/Skill'
import ProjectType from '../components/ProjectType/ProjectType'
import Duration from '../components/Duration/Duration'
import WorkingModel from '../components/WorkingModel/WorkingModel'
import Experience from '../components/Experience/Experience'
import { useState } from 'react'
import Button from '../components/Widgets/Button/Button'
import Verification_popup from '../components/Verification_popup/Verification_popup'

var generator = require('generate-password')

// Getting first API data using function Call(skills)
const getSkillData = async () => {
  const fetchParamsSkills = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: ` {
    skills (pagination:{limit:100}){
      data {
        id
        attributes {
          skillname
          skillimage{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`,
    }),
  }

  const response = await fetch(
    'http://localhost:1337/graphql',
    fetchParamsSkills
  )
  const skillData = await response.json()
  console.log(skillData)

  return {
    data: { skillData: skillData },
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const fullData = []

  var skillResponse = await getSkillData()

  console.log(skillResponse, 'skill Response')
  const fetchParams = {
    method: 'POST',

    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
        hireDevelopers {
          data {
            id
            attributes {
              question
              options {
                type
                option
                name
              }
            }
          }
        }
      }
     `,
    }),
  }
  fullData.push(skillResponse.data.skillData)

  // Fetching Second API data directly( questions Data)
  const res = await fetch('http://localhost:1337/graphql', fetchParams)

  const response = await res.json()

  const data = response.data.hireDevelopers.data

  //combine all data together into single object
  fullData.push(data)

  return { props: { fullData } }
}

// Home page to Display all the records in Single page
const Home: NextPage = ({ fullData }: any) => {
  const [particularData, setParticularData] = useState<number>(0)

  // const [selectedData, setSelectedData] = useState({
  //   checkBoxData: [],
  // })
  const [skillData, setSkillData] = useState({
    // skillType: [],
    name: '',
    email: '',
  })
  const [password, setPassword] = useState<any>('')
  const [popup, setpopup] = useState<boolean>(false)
  const [dataCarrier, setDataCarrier] = useState('')
  const handleClose = () => {
    setpopup(false)
  }
  const onChange = (e: any) => {
    if (particularData != 0) {
      if (e.target.checked) {
        console.log(e.target.value)
      }
    } else {
      // { ...credentials, [e.target.name]: e.target.value }

      if (e.target.name == 'name') {
        setSkillData({ ...skillData, name: e.target.value })
      } else if (e.target.name == 'email') {
        setSkillData({ ...skillData, email: e.target.value })
      } else {
        // var temp=
      }
    }
  }

  const data = fullData[1]

  // Function for forward navigation in single page
  const handleFunction = async (e: any) => {
    var password = generator.generate({
      length: 10,
      numbers: true,
    })
    setPassword(password)
    console.log(password)
    if (particularData == 0) {
      const response = await fetch(
        'http://localhost:1337/api/auth/local/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: skillData.name,
            email: skillData.email,
            password: password,
          }),
        }
      )
      if (response.status >= 200 && response.status <= 299) {
        const jsonResponse = await response.json()
        setDataCarrier(jsonResponse.user);
        fetchdata(jsonResponse)
        
      } else {
        // Handle errors
        console.log(response.status, response.statusText)
      }
    } else {
      if (particularData < 4) {
        setParticularData(particularData + 1)
      } else {
        alert('Ends Here No New Page Defined')
      }
    }
  }

  // function for reverse navigation in single page
  const reverseNavigation = (e: any) => {
    console.log(e, 'function')
    setParticularData(particularData - 1)
    console.log('cancel function')
  }

  const cancelFunction = () => {
    setParticularData(0)
  }
  const fetchdata=async (jsonResponse: any) => {
    console.log(jsonResponse.user.email)
    const response = await fetch(
      'http://localhost:1337/api/auth/forgot-password',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email: jsonResponse.user.email }),
      }
    )
  if (response.ok == true) {
    setpopup(true)
    console.log('verificaiton sent')
  } else {
    console.log('error in forgot password')
  }
  }
  //value for the Footer component

  return (
    <div>
      {/* Rendering Data by giving Id to the component so that navigation is in possible way */}

      {particularData == 0 && (
        <Skill data={fullData[0]} functionHandling={onChange} />
      )}
      {particularData == 1 && (
        <ProjectType
          data={data[0]}
          functionPre={reverseNavigation}
          functionFor={handleFunction}
          functionCancel={cancelFunction}
          functionHandling={onChange}
        />
      )}
      {particularData == 2 && (
        <Duration data={data[1]} functionDef={reverseNavigation} />
      )}
      {particularData == 3 && (
        <WorkingModel data={data[2]} functionDef={reverseNavigation} />
      )}
      {particularData == 4 && (
        <Experience data={data[3]} functionDef={reverseNavigation} />
      )}
      <Verification_popup
        onClose={handleClose}
        visible={popup}
        dataCarrier={dataCarrier}
      />

      <div className="w-5/6 m-auto flex mt-5">
        {/* Footer component reusable component for the button in the bottom */}

        <Button
          value="Cancel"
          name="disabled"
          path="/"
          func={cancelFunction}
          textForm=""
        />
        <Button
          value="Continue"
          name="blue"
          path=""
          func={handleFunction}
          textForm=""
        />
      </div>
    </div>
  )
}

export default Home
