import React, { useState } from 'react'

export default function CreatePassword() {
  const [credential, setCredential] = useState({
    password: '',
    confirmPassword: '',
  })

  const [err, setErr] = useState('')
  const handleChange = (e: any) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
    if (credential.password == credential.confirmPassword) {
      setErr('')
    }
  }

  const handleSubmit = () => {
    if (credential.password == credential.confirmPassword) {
      setErr('')
      alert('success')
    } else {
      setErr('Mismatch Password')
      console.log(credential)
    }
  }
  return (
    <div>
      <div>
        <div className="w-[22%] shadow-md mt-10 border border-slate-50 rounded-lg m-auto">
          <div className=" w-[90%] m-auto ">
            <div className="grid  justify-items-center mt-5">
              <input
                type="password"
                name="password"
                value={credential.password}
                className="bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="grid mt-5 justify-items-center">
              <input
                type="password"
                name="confirmPassword"
                value={credential.confirmPassword}
                className="bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Confirm Password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            {err != '' && <div className="text-center text-red-500">{err}</div>}

            <div className="grid  justify-items-center mt-5">
              {' '}
              <button
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300  rounded ml-2 text-sm px-10  py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3"
              >
                Set Password
              </button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
