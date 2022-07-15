
interface props{
  data: {
    type:string
    option:string
  }
 }

const CheckBox = (props: props) => {
    console.log("checkbox",props)
  
    return (
      <div className="flex space-x-4 my-4 ml-4">
        <div>
          <input
            type={props.data.type}
            name={props.data.option}
            className="w-4 h-4"
          />
        </div>
        <div className="text-xs ">{props.data.option}</div>
      </div>
    )
  }
  
  export default CheckBox
  