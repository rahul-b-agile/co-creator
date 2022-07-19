import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/ProfileNavbar/ProfileNavbar'
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
  const res = await fetch('http://localhost:1337/api/profiles?populate=*')
  const data1 = await res.json()
  console.log(data1)

  return {
    props1: { data1: data1 },
  }
}
export const getStaticProps = async () => {
  var total = []

  var profile = await getProfile()
  total.push(profile)

  const res = await fetch('http://localhost:1337/api/contents?populate=*')
  const data = await res.json()
  console.log(data)
  total.push(data)

  return {
    props: { data: total },
  }
}
const Navigate = ({ data }: any) => {
  console.log(data)
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
    console.log('profile', data[0].props1.data1.data[0].attributes.primaryskill)

    useEffect(
      () =>
        setProfile(
          data[0].props1.data1.data.filter(
            (data: any, i: number) =>
              data.attributes.primaryskill.toUpperCase() == skill.toUpperCase()
          )
        ),
      []
    )

    useEffect(
      () =>
        setResult(
          data[1].data.filter(
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
      ;() => setLoading(false)
    }
  }

  return (
    // <>

    //     <Navbar></Navbar>

    //     {result.length == 1 ? <Header result={result}></Header> : "Loading..."}
    //     {loading && profile.length >= 1 ? <Cards profile={profile}></Cards> : "No Matched Skills"}

    <>
      {selectedProfile.length == 0 ? (
        <>
          {/* <Navbar></Navbar> */}

          <>
            {result.length == 1 ? (
              <Header result={result}></Header>
            ) : (
             null
            )}

            <div className="col-span-3 mt-3 ">
              <div className="grid grid-cols-12 ml-[5%] m5-[5%]">
                <div className="col-span-9  ">
                  <div className="ml-[5%]">
                    <div className="grid grid-flow-col w-[60%]  m-auto">
                      {loading && profile.length >= 1 ? (
                        <Cards profile={profile} func={handleProfile}></Cards>
                      ) : (
                        'No Matched Skills'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <SelectedProfile props={selectedProfile}></SelectedProfile>
      )}
    </>

    // </>
  )
}
export default Navigate
