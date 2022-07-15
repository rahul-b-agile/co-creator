import Link from 'next/link'
import React from 'react'
import CheckBox from '../CheckBox/Checkbox'
import Footer from '../Footer/Footer'

export default function WorkingModel(props: any) {
  const sendData = props.data
  //   const footerName = [
  //     {
  //       name: 'Cancel',
  //       path: '/',
  //     },
  //     {
  //       name: 'Continue',
  //       path: '/Hire-page-5',
  //     },
  //   ]
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="my-14 flex  justify-between">
          <div className="text-blue-500 text-2xl font-bold flex-none w-2/4   ">
            {sendData.attributes.question}
          </div>
          <div className="mr-72">
            <div className="flex">
              {/* <Link href="/Hire-page-3"> */}
              <button onClick={props.function}>
                <span className="material-symbols-outlined text-gray-400 text-2xl rotate-180">
                  play_arrow
                </span>
              </button>
              {/* </Link> */}
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

        {/* <Footer value={footerName} /> */}
      </div>
    </div>
  )
}
