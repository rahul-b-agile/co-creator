import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <div className="w-5/6">
        <p> Let's get Started What's the best way for us to reach you?</p>
        <input type="number" value="Mobile" />

        <p>When would you like to connect?</p>
        <input type="day" />
        <input type="time" />
        <input type="choose time" />

        <div className="text-center">
          <button className="bg-blue"> Request a Call</button>
        </div>
        <div>
          <a>Skip for now. I'd like to learn more before proceeding</a>
        </div>
      </div>
    </div>
  )
}
