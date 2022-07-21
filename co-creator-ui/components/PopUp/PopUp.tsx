import { useState } from "react"
const PopUp = () => {

    const [user, setUser] = useState("rajesh.ravichandran@agilisium.com")
    let text = "Ajayn@casta.com";
    let result = text.indexOf("@");
    let value = text.slice(result+1 , result+4)
    let data = text.replace(value,"***")
     
 

    

    return (

        <div className="w-[40%] mt-24 m-auto border ">

            <h1 className="w-[80%] m-auto text-2xl font-semibold text-center p-7">Please verify your email</h1>

            <div className="w-[80%] m-auto text-center">You're almost there we have sent an email to {data} </div>
            <div className="p-5">
            <div className="w-[100%] m-auto text-center mt-5">Just click on the email to complete the signup to acceess the <b>profiles!</b></div>
            <div className="w-[85%] text-center m-auto ">If you don't see it. You may need to check your spam folder</div>
            </div>
        </div>


    )
}
export default PopUp