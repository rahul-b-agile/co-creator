import React from 'react'
import Link from 'next/link'

interface buttonName {
  name: string
  path: string
  func: any
}

export default function Button(props: buttonName) {
  var className: string = ''
  var condition: Boolean = false
  var buttonName: string = ''

  switch (props.name) {
    case 'Cancel':
      className = 'bg-white ml-2  text-gray-400  py-2 px-2 border-0  rounded '
      condition = false
      break
    case 'Continue':
      className =
        'text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded ml-2 text-sm px-3 mt-2  py-1 text-center mr-3 md:mr-0 bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      condition = false
      break
    case 'Login':
      className =
        'bg-white ml-2 hover:bg-gray-100 text-gray-800  py-2 px-5 border border-blue-400 rounded shadow'
      condition = true
      break
    case 'SignUp':
      className =
        'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded ml-2 text-sm px-5  py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      condition = true
      break
    case 'LoginButton':
      className =
        'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300  rounded ml-2 text-sm px-10  py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      buttonName = 'Log In'
      condition = false
      break

    default:
      break
  }

  console.log(props, 'sjfpsjd')

  return (
    <div>
      {condition ? (
        <Link href={props.path}>
          <input
            type="button"
            value={props.name}
            className={className}
            // onClick={props.func}
          />
        </Link>
      ) : (
        <input
          type="button"
          value={props.name}
          className={className}
          onClick={props.func}
        />
      )}
    </div>
  )
}
