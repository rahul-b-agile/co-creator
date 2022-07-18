import React from 'react'
import CheckBox from '../Widgets/CheckBox/Checkbox'

export default function Experience({ data, functionDef }: any) {
  const sendData = data

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="my-14 flex  justify-between">
          <div className="text-blue-500 text-2xl font-bold flex-none w-2/4   ">
            {sendData.attributes.question}
          </div>
          <div className="mr-72">
            <div className="flex">
              <button
                onClick={() => {
                  functionDef()
                }}
              >
                <span className="material-symbols-outlined text-gray-400 text-2xl rotate-180">
                  play_arrow
                </span>
              </button>

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
      </div>
    </div>
  )
}
