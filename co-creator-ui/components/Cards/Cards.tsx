import styles from './Cards.module.css'
import { useState, useContext } from "react"
import { Context1 } from '../../pages/context'

interface props {
  skills: string
  src: string | undefined
  func:any
}

const Card = ({ skills, src, func }: props) => {
  // console.log(skills, src)

  const cards = useContext(Context1) //Context
  console.log(skills, "skills")
  console.log(cards.userObject.SkillPage.skill)
  // console.log(cards.data)

  const handleClick = (data:any) =>
  {
    if(data!="Not sure, Need advice")
    func(data)
   
  console.log(func , "func.handleCards")
  }


  return (


    <>

      {cards.userObject.SkillPage.skill == skills && "Not sure, Need advice"!=skills ? <div className="sm:w-32 lg:w-56 border-yellow-50 ml-1 pl-3 ">
        <div className="flex flex-row mt-5 p-1 items-center bg-black   rounded-md  shadow-2xl border border-red-500">
          <div className="ml-2">
            {src == undefined ? null : (
              <img style={{ width: '2em', height: '2em' }} src={src}></img>
            )}
          </div>

          {src == undefined ? (
            <div className="ml-2     p-1">{skills}</div>
          ) : (
            <div className="ml-2 text-lg  text-white font-light ">
              {skills}
            </div>
          )}
        </div>
      </div> :
       <div onClick={()=>handleClick(skills)} className="sm:w-32 lg:w-56 ml-1 pl-3 ">
        <div className="flex flex-row mt-5 p-1 items-center rounded-md border-slate-100 shadow-md">
          <div className="ml-2">
            {src == undefined ? null : (
              <img style={{ width: '2em', height: '2em' }} src={src}></img>
            )}
          </div>

          {src == undefined ? (
            <div className="ml-2     p-1">{skills}</div>
          ) : (
            <div className="ml-2 text-lg  text-slate-500 font-light ">
              {skills}
            </div>
          )}
        </div>
      </div>}
    </>

  )
}
export default Card