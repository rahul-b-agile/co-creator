import type { NextPage } from 'next'
import skillImg from "../Assets/python.png"
import { useRouter } from 'next/router'



// export const getStaticProps = async () => {
//   const fetchContent = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: ` {
//         contents {
//           data {
//             id
//             attributes {
//               skill
//               description
//               image {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//             }
//           }
//         }
//   }
// `,
//     }),
//   }

//   const response = await fetch(
//     'http://localhost:1337/graphql',
//     fetchContent
//   )
//   const ContentData = await response.json()
//   console.log(ContentData)

//   return {
    
//     data: { ContentData },
//   }
// }









// export const getStaticProps:any = async() =>
// {


    
//     const res= await fetch("http://localhost:1337/api/profiles")
//     const data = await res.json();
//     console.log(data)


//     return{
// props: { data: data }
// }
// }

const Head = ({result}:any) => {


  const router = useRouter()


  



  console.log(result[0].attributes)
  console.log(result[0].attributes.skill)
  console.log(result[0].attributes.description)
  console.log(result[0].attributes.image.data[0].attributes.url)
  
  // console.log(skillImg)
  // console.log(skills.data)
  return (
    <>

      {/* <Navbar></Navbar> */}
     

        <>

          <div className="grid grid-cols-3 gap-4">

            <div className="col-span-2 ml-[20%] w-[70%] ">
              <div className='grid  text-5xl tracking-wide justify-items-center font-semibold'> Hire the Top {result[0].attributes.skill} Developers in any time Zone!</div>
              <div className='tracking-wide text-xl w-[90%] font-semibold mt-5 '>{result[0].attributes.description}
              </div>
              <div>
                <button className="bg-blue-500 w-[69%] mt-5 tracking-wide ml-[4%]  text-2xl hover:bg-blue-700 text-white  font-bold py-2 px-4 ">
                  Hire {result[0].attributes.skill} developers
                </button>
              </div>
            </div>

            <div className="col-span-1">
              <div className='grid justify-items-start'><img width={"50%"} height={"60%"} src={result[0].attributes.image.data[0].attributes.url}></img></div>

            </div>

            <div className="col-span-3 font-semibold  ml-[14%] text-3xl mt-5 ">

              Get to Hire the ready to deploy trained and experienced {result[0].attributes.skill} developers.

            </div>





          </div>

          {/* <div className='col-span-3 mt-3 '>

            <div className='grid grid-cols-12 ml-[5%] m5-[5%]'>

              <div className='col-span-9  '>
                <div className='ml-[5%]'>
                  <div className='grid grid-flow-col w-[90%]  m-auto'>
                    <Cards></Cards>

                  </div>
                </div>
              </div>



            </div>



          </div> */}

        </>

     

    </>


  )
}

export default Head
