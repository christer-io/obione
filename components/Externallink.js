
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

function Externallink({img, postid, url, title, description}) {
    return (
        <Link key={postid} href={url} target="_blank" >
        <div className="border text-black hover:text-hover border-lightgray rounded-lg group cursor-pointer overflow-hidden">
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg font-bold text-left">{title}</p>
              <p className="text-sm  pt-2 font-light text-left">{description}</p>
              <p className="text-sm font-light pt-5 text-left">Learn more</p>     
            </div>
          </div>
        </div>
      </Link>
    )
  }

  export default Externallink

