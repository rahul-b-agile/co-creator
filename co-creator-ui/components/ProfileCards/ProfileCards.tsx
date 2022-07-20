import styles from "./ProfileCards.module.css"
import skillImg from "../../Assets/python.png"
import profile from "../../Assets/profile1.png"
import star from "../../Assets/star.png"
import SelectedProfile from "../SelectedProfile/SelectedProfile"
import { useRouter } from 'next/router'

import {useState , useEffect} from "react"
const Cards = ({ profile , func }: any) => {
    const router = useRouter()
    console.log(profile[0].attributes.image.data[0].attributes.url)
    console.log(profile[0].attributes)
console.log("profile", profile.map((data: any) => data.attributes.skill.map((data: any) => data.skill)))
const [items, setItems] = useState([]);
const handleClick = (data:any) =>
{
   
        localStorage.setItem('items', JSON.stringify(data));
     
 
 
}


    return (
        <>
            {profile.map((data: any) => (

                <>
                    <div className=" rounded-lg overflow-hidden ml-32 w-[97%] mb-10 border border-slate-250 shadow-lg">
                        <div className="grid grid-cols-4 mr-2">
                            <div className="col-span-1">    <img className="w-[16em]" src={data.attributes.image.data[0].attributes.url} alt="Sunset in the mountains" /></div>
                            <div className="col-span-3 mt-1 ">
                                <div className="grid grid-cols-1 ml-[5%] font-medium">
                                    {data.attributes.name}
                                </div>
                                <div className="grid grid-cols-1  ml-[5%]">
                                    {data.attributes.domain}
                                </div>

                            </div>
                            <div className="col-span-4">
                                <div className="grid grid-cols-1 ml-[5%] w-[27%] mt-2 ">
                                    <div className={styles.expert}>
                                        <div className="flex items-baseline ">  <img className="w-[10%] h-[20%] ml-1  " src={star.src}></img><span className="">Expert</span><span className="text-xs ml-1 mt-1"> in</span></div>

                                    </div>
                                </div>



                            </div>
                            <div className="col-span-4">

                                <div className="grid grid-cols-4 ml-[4%]">
                                    {/* {data.skill.map((data1) =>
                                    (

                                        <div className="col-span-1 ">
                                            <div className={styles.skill}>
                                                {data1.skills}
                                            </div>
                                        </div>






                                    ))} */}{
                                        data.attributes.skill.map((data: any) =>
                                        (
                                            <div className="col-span-1 ">
                                                <div className={styles.skill}>
                                                    {data.skill}
                                                </div>
                                            </div>

                                        )
                                        )



                                    }
                                </div>

                            </div>
                            <div className="col-span-4 text-[90%] ml-[5%] mt-3 font-medium ">

                                Also Worked With

                            </div>

                            <div className="col-span-4">

                                <div className="grid grid-cols-4 ml-[4%]">


                                    {/* {
                                        data.worked.map((data2) => (

                                            <div className="col-span-1 text-slate-400">
                                                <div className={styles.worked}>
                                                    {data2.worked}
                                                </div>
                                            </div>

                                        ))


                                    } */}


                                    {
                                        data.attributes.technologies.map((data: any) =>
                                        (
                                            <div className="col-span-1 text-slate-400 ">
                                                <div className={styles.worked}>
                                                    {data.technology}
                                                </div>
                                            </div>

                                        )
                                        )



                                    }








                                </div>

                            </div>




                            <div className="col-span-4 mt-3">

                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">

                                        <div className=" text-[90%] ml-[10%] font-medium " >
                                            Experience
                                        </div>
                                        <div className="ml-[10%]  text-[90%] ">
                                            {data.attributes.experience}
                                        </div>

                                    </div>



                                    <div className="col-span-2">
                                        <div className="text-[90%] ml-[5%] font-medium "  >
                                            Availability
                                        </div>
                                        <div className="ml-[10%]  text-[90%]">
                                            {data.attributes.availability}
                                        </div>
                                    </div>





                                </div>

                            </div>



                            <div className="col-span-4 mb-7 ">
                                <button onClick={()=>handleClick(data)} className="bg-blue-500 mt-5 tracking-wide ml-[5%] w-[94%]  hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 ">
                                    View {data.attributes.name.split(" ")[0]}
                                </button>
                            </div>



                        </div>

                    </div>
                </>




            ))}


        </>





    )


}
export default Cards;