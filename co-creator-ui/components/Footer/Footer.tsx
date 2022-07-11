import React from 'react'
import Button from '../Button/Button'

export default function Footer(props: any) {
  console.log(props.value)
  return (
    <div className="flex">
      {props.value?.map((data: any) => (
        <Button name={data.name} path={data.path} />
      ))}
    </div>
  )
}
