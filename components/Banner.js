import { SearchCircleIcon, SearchIcon } from "@heroicons/react/solid"


function Banner() {
    return (
      <div className='pb-8'>
      <section className="bg-gray-800 pt-6">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="hidden sm:inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span className="text-xs bg-darkgreen rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">ObiOne is in early BETA!</span> 
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl dark:text-white pl-10 pr-10"> <span className='text-blue'>Be the change</span> that inspires change!</h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-200 pl-10 pr-10">With an open philosophy and methodology we can solve the global grand challenges in more effective, transparent and democratic ways.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="/post/open-source-quiz" className="inline-flex border border-white justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-500/80 hover:bg-blue-900/80 focus:ring-4 focus:bg-blue-500 ">
                  Take Quiz!
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="/results?searchinput=" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 border-gray-700 hover: bg-white ">
                    <SearchIcon className="h-6 w-6 pr-1" />
                    Search FAQ     
              </a>  
              
          </div>
      </div>
  </section>
      </div>
    )
  }
  
  export default Banner