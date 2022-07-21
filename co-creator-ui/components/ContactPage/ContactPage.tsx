import React, { useState } from 'react'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from 'react-DatePicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ContactPage() {
  const [selectedTimezone, setSelectedTimezone] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [value, setValue] = useState()
  const [time, setTime] = useState('10:00')
  console.log(value)
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="my-10 flex  justify-between">
          <div className="text-blue-500 text-2xl font-bold flex-none w-2/4   ">
            Let's get Started!
          </div>
          <div className="mr-72">
            <div className="flex">
              <button
                onClick={() => {
                  functionDef(data)
                }}
              >
                <span className="material-symbols-outlined text-gray-400 text-2xl rotate-180">
                  play_arrow
                </span>
              </button>

              <div className="border-2 flex-none px-3 py-1 rounded-full text-gray-400">
                Step6/6
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/6">
          <div className="mb-10">
            would you like to connect with us for discussion? If yes please fill
            the below details
          </div>
          <div className="my-2">
            <PhoneInput
              specialLabel={''}
              country={'us'}
              value={value}
              onChange={setValue}
              searchPlaceholder="Phone Number"
              placeholder="Phone Number"
              inputStyle={{
                width: '100%',
              }}
            />
          </div>

          <div className="my-2">
            <div className="text-xs text-gray-500">
              {' '}
              Select Date and time to discuss
            </div>
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={(date: any) => setSelectedDate(date)}
                placeholderText={selectedDate}
                showTimeSelect
                dateFormat="Pp"
                className="border border-[1] border-gray-400 py-1 w-full my-2 rounded"
              />
            </div>
          </div>

          <div className="border border-blue-400 text-center bg-blue-600 text-white w-3/5 p-1 rounded my-2">
            <button>Request a call</button>
          </div>

          <div className="text-gray-400 my-6">(OR)</div>

          <div>I'd like to explore</div>
          <div className="text-blue-500 text-xs">
            <a>Skip for now</a>
          </div>
        </div>
      </div>
    </div>
  )
}
