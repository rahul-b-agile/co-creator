import CheckBox from '../../components/CheckBox/Checkbox'
import style from '../../styles/HirePage2.module.css'

import { GetStaticProps } from 'next'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
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

  const res = await fetch('http://localhost:1337/graphql', fetchParams)

  const data = await res.json()

  // console.log(data.data.hireDevelopers.data[0])

  const sendData = data.data.hireDevelopers.data[2]
  return { props: { sendData } }
}

export default function HirePage4({ sendData }: any) {
  const footerName = [
    {
      name: 'Cancel',
      path: '/',
    },
    {
      name: 'Continue',
      path: '/Hire-page-5',
    },
  ]
  console.log(sendData.attributes.options)
  return (
    <div>
      <Navbar />
      <div className="w-4/5 mx-auto">
        <div className="my-14 flex  justify-between">
          <div className="text-blue-500 text-2xl font-bold flex-none w-2/4   ">
            {sendData.attributes.question}
          </div>
          <div className="mr-72">
            <div className="flex">
              <Link href="/Hire-page-3">
                <button>
                <span className="material-symbols-outlined text-gray-400 text-2xl rotate-180">
                    play_arrow
                  </span>
                </button>
              </Link>
              <div className="border-2 flex-none px-3 py-1 rounded-full text-gray-400">
                Step4/6
              </div>
            </div>
          </div>
        </div>

        {sendData.attributes.options.map((data: any) => (
          <div>
            <CheckBox data={data} />
          </div>
        ))}

        <Footer value={footerName} />
      </div>
    </div>
  )
}
