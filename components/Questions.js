
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";
import { ArrowRightIcon } from "@heroicons/react/solid"


function Questions({postid, url, title}) {
    return (
        <Link key={postid} href={`/question/${url}`}>
        <div className="border text-white border-lightgray rounded-lg group cursor-pointer overflow-hidden">
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg font-bold text-black text-left">{title}</p>
            </div>
          </div>
          <p className="text-lg font-light text-darkdarkblue pt-5 pr-4 pb-3 text-right">&rarr;</p> 
          
        </div>
        
      </Link>
    )
  }

  export default Questions

