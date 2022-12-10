import Link from "next/link"
import StandardButton from "./StandardButton"


function Banner({ part1, part2, subtext }) {
  return (
  <div className="max-w-5xl mx-auto  text-blue text-center pt-10 pb-10">
    <h2 className="pl-10 pr-10 pt-3 text-darkdarkblue text-center text-2xl pt-3 pb-3">
         ObiOne.io
    </h2>
    <div className="px-5 space-y-5 ">
      <h1 className="pl-10 pr-10 text-4xl sm:text-6xl xl:text-8xl font-sans">
        <span className="decoration-4 text-darkdarkblue "> {part1} 
        </span>{" "} {part2}</h1>
    
        <h2 className=" text-darkdarkblue text-center pl-12 pr-12 xl:text-2xl">
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
