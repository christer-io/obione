
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

function Questions({postid, url, title}) {
    return (
        <Link key={postid} href={`/question/${url}`}>
        <div className="border text-white border-lightgray rounded-lg group cursor-pointer overflow-hidden">
        
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg font-bold text-black">{title}</p>
              <p className="text-sm font-light text-darkdarkblue pt-3">Learn more</p>     
            </div>
          </div>
        </div>
      </Link>
    )
  }

  export default Questions

