import React from 'react'
import {useState , useEffect} from "react";
import { useRouter } from 'next/router'

function SelectedProfile(props:any) {
  const router = useRouter()
  const [profile , setProfile] = useState([])
  
  useEffect( ()=>setProfile([props]), [])
  console.log(profile)
  console.log(profile.length)
 
const handleChange = () =>
{
  router.push('/')

}
  
  
  return (
    <>
    <div>
    SelectedProfile
      
      </div>
      <button onClick={handleChange}>Back</button>



    </>
  )
}

export default SelectedProfile