
import { useRouter } from "next/router"
import React, { FormEvent, useState} from "react"


function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();



  const searching = async () => {   
    router.push({
      pathname: "/results/",
      query: {
          searchinput: search
      } 

      });
  };

  
  return (
    <div className="flex justify-center p-3 mx-auto ">
       
        <div className=" p-1 space-x-2">
          <input className="rounded-xl p-2 w-60 border" placeholder="Search for things on open" onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={searching} className="text-white pt-2 pb-2 pr-3 pl-3 bg-maxdarkblue rounded-xl border border-white">Search</button>  
        </div> 
            
         
    </div>
  )
}

export default Search