
import { useRouter } from "next/router"
import React, { FormEvent, useState} from "react"


function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();



  const searching = async () => {   
    const isTestroute = router.pathname.includes("testresults")
    router.push({
      pathname: isTestroute ? "/testresults/":"/results/",
      query: {
          searchinput: search
      } 

      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searching();
  }

  
  return (
    <div className="flex justify-center p-3 mx-auto ">
        <div className=" p-1 space-x-2">
          <form onSubmit={handleFormSubmit}>
            <input className="rounded-xl p-2 w-50 sm:w-60 border" placeholder="Enter search terms" onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searching} className="text-white pt-2 pb-2 pr-3 pl-3 bg-maxdarkblue rounded-xl border border-white">Search</button>  
          </form>
        </div> 
    </div>
  )
}

export default Search