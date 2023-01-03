import Link from 'next/link';
import { MenuIcon, SearchIcon, UserCircleIcon, AcademicCapIcon, DocumentTextIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"
import Search from './Search';

function Footermobile() {
  return (
    <div>
        <section className="block fixed inset-x-0 bottom-0 z-10 md:hidden bg-white shadow-inner p-1 md:px-10">
            <div className="grid grid-cols-3 p-2 md:px-5 "> 
                
                <div className="">
                   
                    <div className="flex justify-center">
                    <Link href="/"> 
                        <HomeIcon className="h-6 fill-darkdarkblue "/>
                    </Link>
                    </div>  
                    <div className="flex justify-center">    
                    <Link href="/"> 
                        <h3 className="text-xs font-light">Home</h3>
                    </Link>
                    </div>   
               
                </div>
                
                
                <div className="">
                    <div className="flex justify-center">
                    <Link href="/results?searchinput=open">
                        <SearchIcon className="h-6 fill-darkdarkblue "/>
                    </Link>
                    </div>  
                    <div className="flex justify-center">   
                    <Link href="/results?searchinput=open">
                        <h3 className="text-xs font-light">Search FAQ</h3>
                    </Link>
                    </div> 
                 
                </div>
                
                <div className="">

                    <div className="flex justify-center">
                    <Link href="/faq/">
                        <DocumentTextIcon className=" h-6 fill-darkdarkblue "/>
                    </Link>
                    </div>  
                    <div className="flex justify-center">  
                    <Link href="/faq/">  
                        <h3 className="text-xs font-light">Resources</h3>
                    </Link>
                    </div> 
                
                </div>
                
            </div> 
        </section> 
    </div>
  )
}

export default Footermobile