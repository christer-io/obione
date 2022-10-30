import Link from "next/link"


function BannerSmall({ part1, part2, part3 }) {
  return (
  <div className="text-center">
    
    <div className="flex justify-between mt-10 mb-10 items-center text-darkdarkblue border-black py-10 lg:py-0">
      <h1 className="text-4xl max-w-xl font-serif text-center mx-auto">
        <span className="decoration-4 "> {part1} <span className="text-blue"> {part2} </span> {part3}
        </span>{" "} 
      </h1> 
    </div>
    
  </div>
  
  )
}

export default BannerSmall