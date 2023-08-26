
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searching();
  }
  
  return (
            
    <div class="flex mx-auto">
      <form onSubmit={handleFormSubmit} class="max-w-lg min-w-[50%] mx-auto " >
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search FAQs..." required="" onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" class="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-darkdarkblue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 ">
                    <svg class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <a className="hidden md:flex">Search</a>
                </button>
            </div>
      </form>        
    </div>      
    
  )
}

export default Search