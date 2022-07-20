import Navbar from "../../components/Navbar/Navbar"
import Link from 'next/link'
const Login = () => {

    return (

        <div>
            <Navbar></Navbar>
            <div className="w-[22%] shadow-md mt-10 border border-slate-50 rounded-lg m-auto">
                <div className=" w-[90%] m-auto ">

                    <div className="grid justify-items-center mt-5 text-blue-500 font-semibold text-xl ">Sign up</div>
                    <div className="grid  justify-items-center mt-5">
                        <input type="email" id="email" className="bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required /></div>
                        <div className="grid  justify-items-center mt-5">
                        <input type="email" id="email" className="bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required /></div>
                    
                    <div className="grid mt-5 justify-items-center">
                        <input type="email" id="email" className="bg-white-50 border w-full  border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required /></div>
                   
                    <div className="grid  justify-items-center mt-5">  <button className=
                        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300  rounded ml-2 text-sm px-10  py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button> </div>
                    <div className="grid justify-items-center">  <button className="bg-white ml-2  text-gray-400  py-2 px-10 border-0  rounded">cancel</button> </div>



                    <div className="text-center text-gray-600  mt-10 mb-6"><span className="font-thin">Already a User?</span><span className="text-blue-500 font-normal"><Link href="/login"> Login here</Link></span></div>

                </div>
            </div>





        </div>

    )

}
export default Login