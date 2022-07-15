import type { NextPage } from 'next'
import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Link from "next/link"
import Cards from '../components/Cards/Cards'
import Card from '../components/Cards/Cards'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
// export const getStaticProps = async () => {

//   const fetchParams = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     }, body: JSON.stringify({

//       query: ` {
//     skills {
//       data {
//         id
//         attributes {
//           skillname
//           skillimage{
//             data{
//               attributes{
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
//     })
//   }



//   const res = await fetch("http://localhost:1337/graphql", fetchParams)
//   const data = await res.json()
//   console.log(data)


//   return {
//     props: { data: data }
//   }

// }


const Home: NextPage = ({ data }: any) => {
  // console.log(data.data.skills.data[1].attributes.skillimage.data[0].attributes.url)

  // const [url, setUrl] = useState("http://localhost:1337")
  // console.log(data)

  return (
    <>

Name
    
    </>


  )




}

export default Home
