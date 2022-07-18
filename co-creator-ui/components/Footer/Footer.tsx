import React from 'react'
import Button from '../Widgets/Button/Button'

interface buttonType {
  name: string
  value: string
  path: string
  func: void
}
interface footerType {
  value: { name: string; path: string; func: any; value: string }[]
}

export default function Footer(props: footerType) {
  console.log(props.value[0].value, 'footer')
  return (
    <div className="flex">
      {props.value?.map((data: buttonType) => (
        <Button
          name={data.name}
          path={data.path}
          func={data.func}
          value={data.value}
        />
      ))}
    </div>
  )
}
