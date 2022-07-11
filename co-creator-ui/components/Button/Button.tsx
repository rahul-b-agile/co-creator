import React from 'react'
import Link from 'next/link'

export default function Button(props: any) {
  var className: string = ''

  console.log(props, 'button')

  switch (props.name) {
    case 'Cancel':
      className = 'bg-white ml-2  text-gray-400  py-2 px-2 border-0  rounded '
      break
    case 'Continue':
      className =
        'text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded ml-2 text-sm px-3 mt-2  py-1 text-center mr-3 md:mr-0 bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      break

    default:
      break
  }

  return (
    <div>
      <Link href={props.path}>
        <input type="button" value={props.name} className={className} />
      </Link>
    </div>
  )
}
