import React from 'react'
import Button from '../Button/Button'

interface buttonType {
  name: string
  path: string
  func: void
}
interface footerType {
  value: { name: string; path: string; func: any }[]
}

export default function Footer(props: footerType) {
  console.log(props.value, 'footer')
  return (
    
    <div className="flex">
      {props.value?.map((data: buttonType) => (
        <Button name={data.name} path={data.path} func={data.func} />
      ))}
    </div>
  )
}
