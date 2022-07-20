import React from 'react'
import CheckBox from '../Widgets/CheckBox/Checkbox'
import Button from '../Widgets/Button/Button'

export default function ProjectType({
  data,
  functionPre,

  functionHandling,
}: any) {
  const sendData = data
  var str = 'name'

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
                  functionPre(data)
                }}
              >
                <span className="material-symbols-outlined text-gray-400 text-2xl rotate-180">
                  play_arrow
                </span>
              </button>

              <ul></ul>
              <div className="border-2 flex-none px-3 py-1 rounded-full text-gray-400">
                Step2/6
              </div>
            </div>
          </div>
        </div>

        {sendData.attributes.options.map((data: any) => (
          <div>
            <CheckBox data={data} functionHandling={functionHandling} />
          </div>
        ))}
      </div>
    </div>
  )
}
