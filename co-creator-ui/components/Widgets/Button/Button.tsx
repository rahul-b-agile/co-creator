import React from 'react'
import Link from 'next/link'

interface buttonName {
  name: string
  path: string
  func: any
  value: string
  textForm: string
}

export default function Button({
  name,
  path,
  func,
  value,
  textForm,
}: buttonName) {
  var className: string = ''
  var condition: Boolean = false
  var buttonName: string = ''

  switch (name) {
    case 'disabled':
      className = 'bg-white ml-2  text-gray-400  py-2 px-2 border-0  rounded '
      condition = false
      break

    case 'blue':
      console.log('blue occurs')
      className =
        'text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded ml-2 text-sm px-3   py-2 text-center mr-3 md:mr-0 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      value == 'SignUp' ? (condition = true) : (condition = false)
      break
    case 'white':
      className =
        'bg-white  hover:bg-gray-100 text-gray-800   rounded ml-2 text-sm px-5  py-2 text-center mr-3 md:mr-0 border border-blue-400  shadow'
      value == 'LogIn' ? (condition = true) : (condition = false)
      break

    default:
      break
  }

  // console.log(props, 'sjfpsjd')

  return (
    <div>
      {condition ? (
        <Link href={path}>
          <input
            type="button"
            value={value}
            className={className}
            onClick={() => {
              func
            }}
          />
        </Link>
      ) : (
        <input
          type="button"
          value={value}
          className={className}
          onClick={() => {
            func(textForm)
          }}
        />
      )}
    </div>
  )
}
