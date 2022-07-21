import { useContext, useState } from 'react'
import { Context1 } from '../../pages/context'
import Card from '../Cards/Cards'
import Input from '../Input/Input'

const Skills = ({ data, functionHandling, paramsData }: any) => {
  const { userObject }: any = useContext(Context1)

  console.log(userObject.token, 'from skill')

  const [url, setUrl] = useState('http://localhost:1337')

  return (
    <>
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
              {i !== 0 ? (
                <>
                  {/* Card to display all the skill set one by one */}
                  <Card
                    skills={data.attributes.skillname}
                    paramsData={paramsData}
                    src={
                      url + data.attributes.skillimage?.data[0]?.attributes.url
                    }
                  ></Card>
                </>
              ) : (
                <Card
                  skills={data.attributes.skillname}
                  paramsData={paramsData}
                  src={undefined}
                ></Card>
              )}
            </>
          ))}
        </div>
        <div className=" ml-4 mt-5 w-5/6 m-auto">
          <Input
            props="skills"
            functionHandling={functionHandling}
            value={paramsData}
          ></Input>
        </div>
        {userObject.value !== '' && (
          <>
            <div className=" ml-4 mt-5 w-5/6 m-auto">
              <Input
                props="names"
                functionHandling={functionHandling}
                value=""
              ></Input>
            </div>
            <div className=" ml-4 mt-5 w-5/6 m-auto">
              <Input
                props="email"
                functionHandling={functionHandling}
                value=""
              ></Input>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Skills
