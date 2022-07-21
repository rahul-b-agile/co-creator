import React, { useEffect, useState } from 'react'

export default function Verification_popup({
  visible,
  onClose,
  dataCarrier,
}: any) {
  const [dataemail, setDataemail] = useState('')

  useEffect(() => {
    if (dataCarrier.email) {
      let text = dataCarrier.email
      let result = text.indexOf('@')
      let value = text.slice(result + 1, result + 4)
      let data = text.replace(value, '***')
      setDataemail(data)
    }
  }, [dataCarrier.email])

  if (!visible) return null
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="w-[40%] mt-24 m-auto border bg-white rounded-md">
          <h1 className="w-[80%] m-auto text-2xl font-semibold text-center p-7">
            Please verify your email
          </h1>
          <div className="w-[80%] m-auto text-center">
            You are almost there we have sent an email to {dataemail}{' '}
          </div>
          <div className="p-5">
            <div className="w-[100%] m-auto text-center mt-5">
              Just click on the email to complete the signup to acceess the{' '}
              <b>profiles!</b>
            </div>
            <div className="w-[85%] text-center m-auto ">
              If you do not see it. You may need to check your spam folder
            </div>
          </div>
          <div className="text-center mb-5">
            <button
              className="px-5 py-2 bg-gray-700 text-white text-center rounded"
              onClick={onClose}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
