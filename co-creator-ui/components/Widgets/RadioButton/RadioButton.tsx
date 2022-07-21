interface Data {
  data: {
    type: string
    name: string
    option: string
  }
  functionHandling: any
}

const CheckBox = ({ data, functionHandling }: Data) => {
  console.log(data)

  return (
    <div className="flex space-x-4 my-4 ml-4">
      <div>
        <input
          type={data.type}
          value={data.option}
          name={data.name}
          className="w-4 h-4 mt-1"
          onChange={functionHandling}
        />
      </div>
      <div className="text-xs mt-1">{data.option}</div>
    </div>
  )
}

export default CheckBox
