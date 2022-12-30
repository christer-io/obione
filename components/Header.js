import Link from "next/link"
import AccountMenu from "./Menu"
import { MenuIcon, SearchIcon, UserCircleIcon, AcademicCapIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"


function Header() {

  
  return (
    <header className="sticky flex justify-between p-3 mx-auto shadow-md bg-maxdarkblue">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <h1 className="text-3xl pl-3 cursor-pointer font-sans font-bold text-blue">Obi<span className="text-white">One.io (Beta)</span></h1>
            </Link>     
        </div>  
          
        
        <div className="hidden md:grid grid-cols-3 space-x-5 text-white "> 
                
            <div className="cursor-pointer">
                <div className="flex justify-center">
                <Link href="/learningpath/">
                    <AcademicCapIcon className="h-7 fill-white  hover:fill-hover" alt="Icon showing academmic symbol"/>
                    <h2 className="text-xs font-light  hover:text-hover">Learn</h2>
                </Link>
                </div>  
            </div>
            
            <div className="cursor-pointer">

                <div className="flex justify-center">
                <Link href="/faq/">
                    <QuestionMarkCircleIcon className="h-7 fill-white  hover:fill-hover" alt="Icon showing question mark"/>
                    <h2 className="text-xs font-light hover:text-hover">FAQ</h2>
                </Link>
                </div>  
            
            </div>
            
        </div> 
         
    </header>
  )
}

export default Header