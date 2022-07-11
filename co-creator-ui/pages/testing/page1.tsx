import type { NextPage } from 'next'
import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import Link from "next/link"

import Card from '../../components/Cards/Cards'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
export const getStaticProps = async () => {

  const fetchParams = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    }, body: JSON.stringify({

      query: ` {
    skills {
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
`
    })
  }



  const res = await fetch("http://localhost:1337/graphql", fetchParams)
  const data = await res.json()
  console.log(data)


  return {
    props: { data: data }
  }

}


const Home: NextPage = ({ data }: any) => {
  console.log(data.data.skills.data[1].attributes.skillimage.data[0].attributes.url)

  const [url, setUrl] = useState("http://localhost:1337")
  console.log(data)

  return (
    <>


      <Navbar></Navbar>

      <div className='w-5/6 m-auto'>
        <div className="ml-4">
          <div className='grid grid-cols-2 mt-8 items-end'>
            <div className=" tracking-wide text-blue-500 font-black text-2xl ">   Find Developers to hire</div>
            <div className='grid justify-items-center'> <div >          
              
             <Button props="step1/6"></Button></div></div>


          </div>
          <div className="mt-3" >
            Select Atleast on skill
          </div>
        </div>

        <div className="ml-4 mt-10 text-blue-600">
          Top Most Skills Listed here
        </div>

        <div className='grid grid-cols-4 gap-1 w-5/6 '>

          {data.data.skills.data?.map((data: any, i: any) => (
            <>{i !== 0 ? (
              <>
                <Card skills={data.attributes.skillname} src={url + data.attributes.skillimage?.data[0]?.attributes.url}></Card>
              </>
            ) : <Card skills={data.attributes.skillname} src={undefined}></Card>

            }

            </>
          ))}

        </div>
        <div className=" ml-4 mt-5 w-5/6 m-auto">
          <Input props="skills"></Input>

        </div>
        <div className=" ml-4 mt-5 w-5/6 m-auto">
          <Input props="names"></Input>

        </div>
        <div className=" ml-4 mt-5 w-5/6 m-auto">
          <Input props="email"></Input>

        </div>

        <div className='ml-2 mt-4'>
          <Button props="cancel"></Button>
          <Button props="continue"></Button>
      </div>



      </div>


    </>


  )




}

export default Home
