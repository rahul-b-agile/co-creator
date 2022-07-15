
interface props
{data:{
  type:string,
  name:string,
  option:string
}
  
}

const CheckBox = (props:props) => {
    console.log("props",props)
  
    return (
      <div className="flex space-x-4 my-4 ml-4">
        <div>
          <input
            type={props.data.type}
            name={props.data.name}
            className="w-3 h-3"
          />
        </div>
        <div className="text-xs mt-1">{props.data.option}</div>
      </div>
    )
  }
  
  export default CheckBox
  