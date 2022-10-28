import Link from "next/link"
import StandardButton from "./StandardButton"


function Banner({ part1, part2, subtext }) {
  return (
  <div className=" text-blue text-center pt-10 pb-10">
    <div className="px-5 space-y-5 ">
      <h1 className="pl-10 pr-10 text-4xl sm:text-7xl xl:text-8xl font-sans">
        <span className="decoration-4 text-darkdarkblue "> {part1} 
        </span>{" "} {part2}</h1>
        <h2 className="text-darkdarkblue text-center ">
         {subtext}
        </h2>
        <div className="flex justify-center space-x-3 pt-5 pb-5 pl-5">
          <StandardButton buttontext="Open for dummies" url="https://obione-3mdf.vercel.app/post/open-source"/>
          <StandardButton buttontext="Open policy" url="https://obione-3mdf.vercel.app/post/open-source"/>  
        </div>
      
    </div> 
  </div>
  )
}

export default Banner
