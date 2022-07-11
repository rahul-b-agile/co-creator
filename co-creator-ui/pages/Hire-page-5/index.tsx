import CheckBox from '../../components/CheckBox/Checkbox'
import { GetStaticProps } from 'next'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'http://localhost:1337/api/hire-developers?populate=*'
  )
  const data = await res.json()

  const sendData = data.data[3]
  return { props: { sendData } }
}

export default function HirePage5({ sendData }: any) {
  const footerName = [
    {
      name: 'Cancel',
      path: '/',
    },
    {
      name: 'Continue',
      path: '/Hire-page-6',
    },
  ]
  console.log(sendData.attributes.options)
  return (
    <div>
      <Navbar />
      {/* <h1>first page</h1> */}

      <div className="w-4/5 mx-auto">
        <div className="my-14 flex  justify-between">
          <div className="text-blue-500 text-2xl font-bold flex-none w-2/4   ">
            {sendData.attributes.question}
          </div>
          <div className="mr-72">
            <div className="flex">
              <Link href="/Hire-page-4">
                <button>
                  <span className="material-symbols-outlined rotate-45 -rotate-90 button">
                    change_history
                  </span>
                </button>
              </Link>
              <div className="border-2 flex-none px-3 py-1 rounded-full text-gray-400">
                Step5/6
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
