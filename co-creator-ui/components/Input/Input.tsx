interface props {
  props: string
  functionHandling: any
}

const Input = ({ props, functionHandling }: props) => {
  var className: string = ''
  var placeholder: string = ''
  var type: string = ''
  var name: string = ''
  switch (props) {
    case 'skills':
      console.log('sdf')
      className =
        'border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500  w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Enter other skills (50+ available)'
      name = 'skills'
      type = 'text'
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
        className={className}
        onChange={(e) => {
          functionHandling(e)
        }}
        name={name}
        // value={e.target.value}
        placeholder={placeholder}
        required
      />
    </>
  )
}
export default Input
