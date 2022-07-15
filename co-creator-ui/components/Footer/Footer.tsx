import React from 'react'
import Button from '../Button/Button'

interface props{
value:{
   name:string,
   path:string
}[]}


export default function Footer(props: props) {
  console.log("footer",props.value)
  return (
    <div className="flex">
      {props.value?.map((data: any , i:number) => (
        <Button key={i} name={data.name} path={data.path} />
      ))}
    </div>
  )
}
