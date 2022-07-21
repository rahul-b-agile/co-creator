import { useState, useContext } from 'react'
import { Context1 } from '../../pages/context'

interface props {
  props: string
  functionHandling: any
}

const Input = ({ props, functionHandling }: props) => {
  const enteredSkill = useContext(Context1)

  // console.log(enteredSkill.userObject.SkillPage.skill , "Input Page")
  var className: string = ''
  var placeholder: string = ''
  var type: string = ''
  var name: string = ''
  var value
  switch (props) {
    case 'skills':
      className =
        'border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500  w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Enter other skills (50+ available)'
      name = 'skill'
      type = 'text'
      value = enteredSkill.userObject.SkillPage.skill
      break
    case 'email':
      className =
        'bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Your Work Email'
      name = 'email'
      type = 'email'
      break
    case 'names':
      className =
        'bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Your Name'
      name = 'name'
      type = 'text'
      break
    case 'emailLogin':
      className =
        'bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Email'
      type = 'email'
      break

    case 'passwordLogin':
      className =
        'bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'password'
      type = 'password'
  }

  return (
    <>
      <input
        type={type}
        id="skill"
        value={value}
        className={className}
        onChange={(e) => {
          functionHandling(e)
        }}
        name={name}
        // value={e.target.value}
        placeholder={placeholder}
        required
      />

      {/* {props.props == 'names' ? (
        <input
          style={{ width: '40%' }}
          type="text"
          id="text"
          className="bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Name"
          required
        />
      ) : null}
      {props.props == 'email' ? (
        <input
          style={{ width: '40%' }}
          type="email"
          id="email"
          className="bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Work Email"
          required
        />
      ) : null} */}
    </>
  )
}
export default Input
