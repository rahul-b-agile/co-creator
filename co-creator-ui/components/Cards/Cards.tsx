import styles from "./Cards.module.css"
import { useState } from "react"

interface props {

    skills: string
    src: string | undefined
    sk:any,
    setSk:any
    skillss:any
}


const Card = ({ skills, src , skillss }: props) => {

    const [sk, setSk]: any = useState([])
  

    const data = (skills: any) => {
       skillss(skills)
console.log(skills)
    }
    console.log(sk)
    return (

        <div className="sm:w-32 lg:w-56 ml-1 pl-3 ">
{console.log("render")}

            <div onClick={() => data(skills)} className="flex flex-row mt-5 p-1 items-center rounded-md border-slate-100 shadow-md"   >
                <div >{src == undefined ? null : <img style={{ width: "2em", height: "2em" }} src={src}></img>}</div>

                {
                    src == undefined ? <div className="ml-2 font-bold text-slate-500   text-md p-1 font-serif"><b>{skills}</b></div>
                        : <div className="ml-2 text-lg  text-slate-500 font-light font-serif"><b>{skills}</b></div>

                }


            </div>


        </div>

    )
}
export default Card