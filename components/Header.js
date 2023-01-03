import Link from "next/link"
import AccountMenu from "./Menu"
import { MenuIcon, SearchIcon, UserCircleIcon, AcademicCapIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"


function Header() {

  
  return (
    <header className="sticky flex justify-between p-3 mx-auto shadow-md bg-maxdarkblue">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <h1 className="text-xl sm:text-2xl pl-3 cursor-pointer font-sans font-bold text-blue">Obi<span className="text-white">One.io (Beta)</span></h1>
            </Link>     
        </div>  
          
        
        <section className="bg-maxdarkblue shadow-inner p-1 ">
            <div className="hidden md:grid grid-cols-3 space-x-4 "> 
                
                
                <div className="">
                    <div className="flex justify-center">
                    <Link href="/learningpath/">
                        <AcademicCapIcon className="h-6 fill-white "/>
                    </Link>
                    </div>  
                    <div className="flex justify-center">   
                    <Link href="/learningpath">
                        <h3 className="text-xs text-white font-light">Learn</h3>
                    </Link>
                    </div> 
                 
                </div>
                
                <div className="">

                    <div className="flex justify-center">
                    <Link href="/faq/">
                        <QuestionMarkCircleIcon className="h-6 fill-white "/>
                    </Link>
                    </div>  
                    <div className="flex justify-center">  
                    <Link href="/faq">  
                        <h3 className="text-xs text-white font-light"> FAQ</h3>
                    </Link>
                    </div> 
                
                </div>
                
            </div> 
            </section>
         
    </header>
  )
}

export default Header