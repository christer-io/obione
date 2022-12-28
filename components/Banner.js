import Link from "next/link"
import StandardButton from "./StandardButton"


function Banner({ part1, part2, subtext }) {
  return (
  <div className=" mx-auto  text-white text-center pt-10 pb-10 bg-maxdarkblue">
    <div className="max-w-5xl mx-auto">
      <h2 className="pl-10 pr-10 pt-3 text-white text-center text-2xl pt-3 pb-3">
          ObiOne.io
      </h2>
      <div className="px-5 space-y-5 ">
        <h1 className="pl-5 ms:pl-10 pr-5 ms:pr-10 text-4xl sm:text-7xl xl:text-8xl font-sans">
          <span className="decoration-4 text-blue"> {part1} 
          </span>{" "} {part2}</h1>
      
          <h2 className=" text-white text-center pl-5 ms:pl-12 pr-5 ms:pr-12 text-sm lg:text-2xl">
          {subtext}
          </h2>
          <div className="flex justify-center space-x-3 pt-8 pb-5 pl-5">
            <StandardButton buttontext="Open - to solve grand challanges" url="/post/opensource"/>
            
          </div>
      
      </div> 
      </div>
  </div>
  )
}

export default Banner
