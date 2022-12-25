import Image from "next/image"
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

function Smallcard({img, topic, url}) {
  return (
    <Link key={img} href={url}>
    <div className="m-1 shadow-md lg:m-2 border hover:text-hover border-spacing-2 cursor-pointer bg-white p-2 ">
      <div className="">
          <div className="relative h-16 md:h-24 w-16 md:w-24">
            {/* <Image src={img} layout="fill" className="" alt={topic}/>  */} 
            <img className="flex relative h-20 w-20 group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(img).url()} alt={topic} />
          </div>
      </div>
    <div className="">
        <div className="flex justify-center pt-1" >
            <h2 className="font-sans text-gray text-xs md:text-base">{topic} &rarr;</h2>
            {/* <h3 className="text-xs md:text-base pb-2">{description}</h3> */}
        </div>
    </div>
    </div>
    </Link>
  )
}

export default Smallcard