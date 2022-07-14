import styles from './Cards.module.css'
interface props {
  skills: string
  src: string | undefined
}

const Card = ({ skills, src }: props) => {
  // console.log(skills, src)
  return (
    <div className="sm:w-32 lg:w-56 ml-1 pl-3 ">
      <div className="flex flex-row mt-5 p-1 items-center rounded-md border-slate-100 shadow-md">
        <div className="ml-2">
          {src == undefined ? null : (
            <img style={{ width: '2em', height: '2em' }} src={src}></img>
          )}
        </div>

        {src == undefined ? (
          <div className="ml-2     p-1">{skills}</div>
        ) : (
          <div className="ml-2 text-lg  text-slate-500 font-light ">
            {skills}
          </div>
        )}
      </div>
    </div>
  )
}
export default Card
