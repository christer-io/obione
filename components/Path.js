
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

function Path({postid, url, title}) {
    return (
      <Link key={postid} href={`/path/${url}`}>
      <div className="border text-white border-lightgray rounded-lg group cursor-pointer overflow-hidden">
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold text-black text-left">{title}</p>
            <p className="text-lg font-light text-darkdarkblue pt-5 pr-2 text-right">&rarr;</p>     
          </div>
        </div>
      </div>
    </Link>
    )
  }

  export default Path

