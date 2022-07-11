interface props {
    props: string
}

const Button = (props: props) => {


    return (
        <>
            {props.props == "cancel" ? <button className="bg-white ml-2 hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4  ">
                Cancel
            </button> : null}

            { props.props == "continue" ? <button type="button" className="text-white bg-blue-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded ml-2 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>:null}

{props.props=="login"?<button className="bg-white ml-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow">
                                            Log in
                                        </button>:null}
{props.props=="signup"? <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded ml-2 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>:null}
{props.props=="step1/6"?<button className=" ml-15 hover:bg-blue-700 text-gray-400 border border-gray-400 py-2 px-4 rounded-full">
              step 1/6
              
            </button> : null}

        </>

    )
}
export default Button;