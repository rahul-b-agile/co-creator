// import styles from "./Cards.module.css"
// import cocreator from "../../co-creator.png"


const Navbar = () => {

    // console.log(cocreator)

    return (


        <nav className="grid grid-cols-3 gap-4">
            <div className="col-span-1 grid ml-[20%] ">
                {/* <img className="w-[5rem] h-[6rem]" src={cocreator.src}></img> */}
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-12 ml-[-8%] mt-8">

                    <div className="col-span-1 text-2xl tracking-widest text-slate-500">FAQ'S</div>
                    <div className="col-span-1 ml-8 text-2xl tracking-widest text-slate-500">Blog</div>
                </div>


                <div>


                </div>


            </div>
        </nav>

    )
}
export default Navbar
