
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";
import { ArrowRightIcon } from "@heroicons/react/solid"


function Questions({postid, url, title, tag}) {
    return (
        <Link key={postid} href={`/question/${url}`} prefetch={false}>
        <div className="border text-black hover:text-hover border-lightgray rounded-lg group cursor-pointer overflow-hidden">
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg text-left">{title}</p>
              
            </div>
          </div>
          <p className="text-sm text-left pl-5 text-darkdarkblue">#{tag}</p>
          <p className="text-lg pt-5 pr-4 pb-3 text-right">&rarr;</p> 
          
        </div>
        
      </Link>
    )
  }

  export default Questions

