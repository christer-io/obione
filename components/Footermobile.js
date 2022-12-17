import { MenuIcon, SearchIcon, UserCircleIcon, AcademicCapIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"

function Footermobile() {
  return (
    <div>
        <section className="block fixed inset-x-0 bottom-0 z-10 md:hidden bg-white shadow-inner p-1 md:px-10">
            <div className="grid grid-cols-3 p-2 md:px-5 "> 
                <div className="">
                    <div className="flex justify-center">
                        <HomeIcon className="h-6 fill-gray-500 "/>
                    </div>  
                    <div className="flex justify-center">    
                        <h3 className="text-xs font-light">Home</h3>
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
                        <QuestionMarkCircleIcon className="h-6 fill-gray-500 "/>
                    </div>  
                    <div className="flex justify-center">    
                        <h3 className="text-xs font-light">FAQ</h3>
                    </div>   
                </div>
               
            
            </div> 
        </section> 
    </div>
  )
}

export default Footermobile