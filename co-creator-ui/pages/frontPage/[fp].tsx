import type { NextPage, GetStaticProps } from 'next'

import Skill from '../../components/Skill/Skill'
import ProjectType from '../../components/ProjectType/ProjectType'
import Duration from '../../components/Duration/Duration'
import WorkingModel from '../../components/WorkingModel/WorkingModel'
import Experience from '../../components/Experience/Experience'
import { useContext, useState } from 'react'
import Button from '../../components/Widgets/Button/Button'
import { Context1 } from '../context'
import { useRouter } from 'next/router'
import Verification_popup from '../../components/Verification_popup/Verification_popup'
import ContactPage from '../../components/ContactPage/ContactPage'

var generator = require('generate-password')

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

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
  const Router = useRouter()
  console.log(Router.query.fp)
  var a = Router.query.fp

  const [particularData, setParticularData] = useState<number>(0)

  const value: any = useContext(Context1)
  console.log(value, 'provider value')

  const [skillData, setSkillData] = useState({
    skillType: a,
    name: '',
    email: '',
  })

  const [password, setPassword] = useState<any>('')
  const [popup, setpopup] = useState<boolean>(false)
  const [dataCarrier, setDataCarrier] = useState('')
  const handleClose = () => {
    setpopup(false)
  }
  const [content, setContent] = useState({
    skillData: skillData,
    projectTypeData: [],
    durationData: [],
    workingModelData: [],
    experienceData: [],
  })

  console.log(value.userObject.token, 'token value')

  const token = value.userObject.token
  //OnChange functions are handled here
  const handleChange = (e: any) => {
    // functionCall(e, content, particularData)
    console.log(e.target.option, 'checkbox')
    if (particularData != 0) {
      if (e.target.checked) {
        if (particularData == 1) {
          var temp = content.projectTypeData
          temp.push(e.target.value)
          setContent({ ...content, projectTypeData: temp })
        }
        if (particularData == 2) {
          setContent({ ...content, durationData: e.target.value })
        }
        if (particularData == 3) {
          var temp = content.workingModelData
          temp.push(e.target.value)
          setContent({ ...content, workingModelData: temp })
        }
        if (particularData == 4) {
          var temp = content.experienceData
          temp.push(e.target.value)
          setContent({ ...content, experienceData: temp })
        }
        console.log(e.target.name)
      } else {
        //Else part of unchecked data
        console.log(e.target.name, 'unchecked')
        if (particularData == 1) {
          var temp = content.projectTypeData
          console.log(temp.splice(temp.indexOf(e.target.value), 1))
          console.log(temp)
          setContent({ ...content, projectTypeData: temp })
        }
        if (particularData == 2) {
          var temp = content.durationData
          console.log(temp.splice(temp.indexOf(e.target.value), 1))
          console.log(temp)
          setContent({ ...content, durationData: temp })
        }
        if (particularData == 3) {
          var temp = content.workingModelData
          console.log(temp.splice(temp.indexOf(e.target.value), 1))
          console.log(temp)
          setContent({ ...content, workingModelData: temp })
        }
        if (particularData == 4) {
          var temp = content.experienceData
          console.log(temp.splice(temp.indexOf(e.target.value), 1))
          console.log(temp)
          setContent({ ...content, experienceData: temp })
        }
      }
    } else {
      // { ...credentials, [e.target.name]: e.target.value }

      if (e.target.name == 'name') {
        setSkillData({ ...skillData, name: e.target.value })
      } else if (e.target.name == 'email') {
        console.log('email')
        setSkillData({ ...skillData, email: e.target.value })
      } else {
      }
    }
  }

  const data = fullData[1]

  // Function for forward navigation in single page
  const handleFunction = async (e: any) => {
    value.setUserObject({ ...value.userObject, token: 'password' })
    //function handling and saving data in context for particularData=0
    if (particularData == 0) {
      //password Generator after click on Continue in first page

      // if(value.userObject.token==''){

      // }
      var password1 = generator.generate({
        length: 10,
        numbers: true,
      })
      setPassword(password1)
      const response = await fetch(
        'http://ec2-52-42-247-15.us-west-2.compute.amazonaws.com:1337/api/auth/local/register',
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
        setDataCarrier(jsonResponse.user)
        fetchdata(jsonResponse)
      } else {
        // Handle errors
        console.log(response.status, response.statusText)
      }
      setContent({ ...content, skillData: skillData })
      value.setUserObject({ ...value.UserObject, SkillData: content })
      // alert('skillData')
      setParticularData(particularData + 1)
      // Router.push('/angular')
    } else {
      //Rest of the content execution done here (particular Date=1,2,3)
      if (particularData <= 4) {
        value.setUserObject({ ...value.UserObject, Skillpage: content })
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
    // setParticularData(0)
    Router.push('/')
  }

  //Fetch Data for Confirmation Mail
  const fetchdata = async (jsonResponse: any) => {
    console.log(jsonResponse.user.email)
    const response = await fetch(
      'http://ec2-52-42-247-15.us-west-2.compute.amazonaws.com:1337/api/auth/forgot-password',
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

  return (
    <div>
      {/* Rendering Data by giving Id to the component so that navigation is in possible way */}

      {particularData == 0 && (
        <Skill
          data={fullData[0]}
          paramsData={a}
          functionHandling={handleChange}
        />
      )}
      {particularData == 1 && (
        <ProjectType
          data={data[0]}
          functionPre={reverseNavigation}
          functionHandling={handleChange}
        />
      )}
      {particularData == 2 && (
        <Duration
          data={data[1]}
          functionDef={reverseNavigation}
          functionHandling={handleChange}
        />
      )}
      {particularData == 3 && (
        <WorkingModel
          data={data[2]}
          functionDef={reverseNavigation}
          functionHandling={handleChange}
        />
      )}
      {particularData == 4 && (
        <Experience
          data={data[3]}
          functionDef={reverseNavigation}
          functionHandling={handleChange}
        />
      )}
      {particularData == 5 && <ContactPage />}

      <Verification_popup
        onClose={handleClose}
        visible={popup}
        dataCarrier={dataCarrier}
      />

      {particularData !== 5 && (
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
      )}
    </div>
  )
}

export default Home
