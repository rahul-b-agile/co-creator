import React, { useState } from 'react'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function ContactPage() {
  const [selectedTimezone, setSelectedTimezone] = useState('')
  const [value, setValue] = useState('sdkf')
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
        <div>{/* <TimePicker /> */} Time</div>
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
