interface props {
  props: string
}

const Input = (props: props) => {
  var className: string = ''
  var placeholder: string = ''
  var type: string = ''
  switch (props.props) {
    case 'skills':
      className =
        'border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500  w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Enter other skills (50+ available)'
      type = 'text'
      break
    case 'email':
      className =
        'bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Your Work Email'
      type = 'email'
      break
    case 'names':
      className =
        'bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder = 'Your Name'
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
