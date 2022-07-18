import type { NextPage, GetStaticProps } from 'next'

import Skill from '../components/Skill/Skill'
import ProjectType from '../components/ProjectType/ProjectType'
import Duration from '../components/Duration/Duration'
import WorkingModel from '../components/WorkingModel/WorkingModel'
import Experience from '../components/Experience/Experience'
import { useState } from 'react'
import Button from '../components/Widgets/Button/Button'

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

  const data = fullData[1]

  // Function for forward navigation in single page
  const handleFunction = (e: any) => {
    console.log(e, 'particularD')
    if (particularData < 4) {
      setParticularData(particularData + 1)
    } else {
      alert('Ends Here No New Page Defined')
    }
    console.log('function', particularData)
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

  //value for the Footer component

  return (
    <div>
      {/* Rendering Data by giving Id to the component so that navigation is in possible way */}

      {particularData == 0 && <Skill data={fullData[0]} />}
      {particularData == 1 && (
        <ProjectType
          data={data[0]}
          functionPre={reverseNavigation}
          functionFor={handleFunction}
          functionCancel={cancelFunction}
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
