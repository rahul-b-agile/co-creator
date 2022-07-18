interface Data {
  data: {
    type: string
    name: string
    option: string
  }
}

const CheckBox = ({ data }: Data) => {
  //   console.log(props)

  return (
    <div className="flex space-x-4 my-4 ml-4">
      <div>
        <input type={data.type} name={data.name} className="w-4 h-4 mt-1" />
      </div>
      <div className="text-xs mt-1">{data.option}</div>
    </div>
  )
}

export default CheckBox
