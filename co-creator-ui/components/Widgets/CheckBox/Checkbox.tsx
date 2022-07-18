interface checkoptions {
  data: {
    type: string
    option: string
  }
}

const CheckBox = ({ data }: checkoptions) => {
  //   console.log(props)

  return (
    <div className="flex space-x-4 my-4 ml-2  ">
      <div>
        <input type={data.type} name={data.option} className="w-4 h-4" />
      </div>
      <div className="text-xs ">{data.option}</div>
    </div>
  )
}

export default CheckBox
