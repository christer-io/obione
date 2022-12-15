import { MenuIcon, SearchIcon, UserCircleIcon, AcademicCapIcon, BadgeCheckIcon } from "@heroicons/react/solid"

function Footermobile() {
  return (
    <div>
        <section className="block fixed inset-x-0 bottom-0 z-10 md:hidden bg-white shadow-inner p-1 md:px-10">
            <div className="grid grid-cols-3 p-2 md:px-5 "> 
                <div className="">
                    <div className="flex justify-center">
                        <BadgeCheckIcon className="h-6 fill-gray-500 "/>
                    </div>  
                    <div className="flex justify-center">    
                        <h3 className="text-xs font-light">Badges</h3>
                    </div>   
                </div>
                <div className="">
                    <div className="flex justify-center">
                        <AcademicCapIcon className="h-6 fill-gray-500 "/>
                    </div>  
                    <div className="flex justify-center">    
                        <h3 className="text-xs font-light">Learn</h3>
                    </div>   
                </div>
                <div className="">
                    <div className="flex justify-center">
                        <SearchIcon className="h-6 fill-gray-500 "/>
                    </div>  
                    <div className="flex justify-center">    
                        <h3 className="text-xs font-light">Search</h3>
                    </div>   
                </div>
               
            
            </div> 
        </section> 
    </div>
  )
}

export default Footermobile