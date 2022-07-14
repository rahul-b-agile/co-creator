// import type { NextPage } from 'next'
import { useState } from 'react'
import Card from '../Cards/Cards'
import Input from '../Input/Input'

const Skills = ({ data }: any) => {
  const footerName = [
    {
      name: 'Cancel',
      path: '/',
    },
    {
      name: 'Continue',
      path: '/Hire-page-2',
    },
  ]
  console.log(data.data.skills.data[1].attributes)

  const [url, setUrl] = useState('http://localhost:1337')

  return (
    <>
      {/* <Navbar></Navbar> */}

      <div className="w-5/6 m-auto">
        <div className="ml-4">
          <div className="grid grid-cols-2 mt-8 items-end">
            <div className=" text-blue-500 font-bold text-2xl ">
              {' '}
              Find developers to hire
            </div>
            <div className="grid justify-items-center">
              {' '}
              <div className="border-2 flex-none px-3 py-1 rounded-full text-gray-400">
                step1/6
              </div>
            </div>
          </div>
          <div className="mt-3 text-gray-400 font-sx">
            Select at least one skill
          </div>
        </div>

        <div className="ml-4 mt-10 text-blue-600">
          Top Most Skills Listed here
        </div>

        <div className="grid grid-cols-4 gap-1 w-5/6 ">
          {data.data.skills.data?.map((data: any, i: number) => (
            <>
              {console.log(data)}
              {i !== 0 ? (
                <>
                  {/* Card to display all the skill set one by one */}
                  <Card
                    skills={data.attributes.skillname}
                    src={
                      url + data.attributes.skillimage?.data[0]?.attributes.url
                    }
                  ></Card>
                </>
              ) : (
                <Card skills={data.attributes.skillname} src={undefined}></Card>
              )}
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
      </div>
    </>
  )
}

export default Skills
