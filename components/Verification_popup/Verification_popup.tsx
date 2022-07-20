import React from 'react'

// export async function getServerSideProps() {


//     const sendingMail=await fetch(
//         'http://localhost:1337/api/auth/local/register',
//         {
// method:'POST',
// headers:{
//     'Content-type':'appliaction/json'
// },
// body: JSON.stringify({
//     email: dataCarrier.email,
//   }),
//         }
//     )
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }


export default function Verification_popup({visible,onClose,dataCarrier}:any) {
    
  if (!visible) return null
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
       
          
          
          <div className="text-center">
            <h1>hi {dataCarrier.username}</h1>
            <h6>{dataCarrier.email}</h6>
            <h6>{dataCarrier.password}</h6>
            <button className="px-5 py-2 bg-gray-700 text-white rounded" onClick={onClose}>
              back
            </button>
          </div>
        
      </div>
    </div>
  )
}
