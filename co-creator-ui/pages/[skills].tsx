import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Cards from '../components/ProfileCards/ProfileCards'
import SelectedProfile from '../components/SelectedProfile/SelectedProfile'
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export const getProfile = async () => {
  const fetchParamsProfile = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: ` query {
        profiles {
          data {
            id
            attributes {
              name
              domain
              experience
              primaryskill
              availability
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              skill {
                skill
                id
              }
              technologies {
                id
                technology
              }
            }
          }
        }
      }
      
`,
    }),
  }
  const res = await fetch('http://localhost:1337/graphql',fetchParamsProfile)
  const data1 = await res.json()
  console.log(data1)

  return {
    props1: { data1: data1 },
  }
}



export const getStaticProps = async () => {
  var total = []
  var profile = await getProfile()
  const fetchParams = {
    method: 'POST',

    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
        contents {
          data {
            id
            attributes {
              skill
              description
              image {
                data {
                  attributes {
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
total.push(profile)

const res = await fetch('http://localhost:1337/graphql',fetchParams)
  const data = await res.json()
  
  
  
  console.log(data)
  total.push(data)

  return {
    props: { data: total },
  }
}





const Navigate = ({ data }: any) => {
  console.log(data[1].data.contents)
  const userProfile: any[] = []
  const [result, setResult] = useState([])
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProfile, setSlectedProfile] = useState([])

  const handleProfile = (data: any) => {
    userProfile.push(data)
    console.log(userProfile)
    console.log(userProfile.length)
    var data = data
    setSlectedProfile(data)
    console.log('selected profile', selectedProfile)
  }

  const router = useRouter()

  if (router.query.skills) {
    var skill = router.query.skills
    console.log(skill)
    console.log('profile', data[0].props1.data1.data.profiles.data[0])

    useEffect(
      () =>
        setProfile(
          data[0].props1.data1.data.profiles.data.filter(
            (data: any, i: number) =>
              data.attributes.primaryskill.toUpperCase() == skill.toUpperCase()
          )
        ),
      []
    )

    useEffect(
      () =>
        setResult(
          data[1].data.contents.data.filter(
            (data: any, i: any) =>
              data.attributes.skill.toUpperCase() == skill.toUpperCase()
          )
        ),
      []
    )

    console.log('Rwesulr', result)
    console.log('Rwesulr', profile)

    //     console.log(data.data[1].attributes.skill==router.query.skills)
    // console.log(router.query.skills)
  }
  if (router.query.skills) {
    if (profile.length > 0) {
      ; () => setLoading(false)
    }
  }

  return (
    // <>

    //     <Navbar></Navbar>

    //     {result.length == 1 ? <Header result={result}></Header> : "Loading..."}
    //     {loading && profile.length >= 1 ? <Cards profile={profile}></Cards> : "No Matched Skills"}

    <>

      <>
        {/* <Navbar></Navbar> */}

        <>
          {result.length == 1 ? (
            <Header result={result}></Header>
          ) : (
            null
          )}



          <div>
            {loading && profile.length >= 1 ? (
              <div className=" mt-5 md:flex md:justify-evenly xs:flex-none">
                <Cards profile={profile} func={handleProfile}></Cards>
              </div>
            ) : (
              'No Matched Skills'
            )}
          </div>


        </>
      </>

    </>

    // </>
  )
}
export default Navigate
