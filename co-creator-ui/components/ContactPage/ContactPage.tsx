import React, { useState } from 'react'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from 'react-DatePicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ContactPage() {
  const [selectedTimezone, setSelectedTimezone] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [value, setValue] = useState('sdkf')
  const [time, setTime] = useState('10:00')
  return (
    <div>
      <div className="w-3/6 mx-auto">
        <p> Let's get Started What's the best way for us to reach you?</p>
        <div>
          <PhoneInput
            specialLabel={''}
            country={'th'}
            value={value}
            onChange={(phone) => {
              console.log()
              setValue(phone)
            }}
            inputStyle={{
              width: '100%',
            }}
          />
        </div>

        <p>When would you like to connect?</p>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: any) => setSelectedDate(date)}
            placeholderText={'Today'}
            className="border border-[1] border-gray-300 py-1 w-full my-2 rounded"
          />
        </div>

        <div>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={() => setSelectedTimezone(selectedTimezone)}
            timezones={{
              ...allTimezones,
              'America/Lima': 'Pittsburgh',
              'Europe/Berlin': 'Frankfurt',
            }}
          />
        </div>
        <div>{/* <TimePicker /> */}</div>
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 rounded px-10 mt-3">
            {' '}
            Request a Call
          </button>
        </div>
        <div className="text-blue-500">
          <a>Skip for now. I'd like to learn more before proceeding</a>
        </div>
      </div>
    </div>
  )
}
