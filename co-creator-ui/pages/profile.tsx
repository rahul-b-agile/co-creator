 import { Context1 } from "./context"
 import {useContext} from "react"
 import PopUp from "../components/PopUp/PopUp"
 
const Profile = () =>
{
    const value: any = useContext(Context1)
  console.log(value.userObject1, 'provider value Skill')
    return(
      
        <div>
         <PopUp></PopUp>
          {/* {

value.userObject1.map((data)=>(
<>
<div>{data.attributes.name}</div>
<div>{data.attributes.domain}</div>
<div>{data.attributes.experience}</div>






</>))


          } */}
        </div>

    )
}
export default Profile