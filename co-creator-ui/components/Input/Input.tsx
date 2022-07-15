import {useState , useEffect} from "react"
interface props
{
    props:string;
    sk:any | undefined
   
   
}


const Input = (props:props) =>
{
var className: string=""
  

   const [input , setInput] = useState("")

  useEffect(  ()=>setInput(props.sk) , [props.sk])

  console.log


    





return(
<>
{props.props == "skills" ? <input style={{ width: "97%" }} value={input}  type="skill" id="skill" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter other skills (50+ available)" required />:null}
{props.props == "names" ? <input style={{ width: "40%" }} type="name" id="name" className="bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />:null}
{props.props == "email" ? <input style={{ width: "40%" }} type="email" id="email" className="bg-white-50 border border-blue-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Work Email" required />:null}


</>
   
)

}
export default Input