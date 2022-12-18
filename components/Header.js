import Link from "next/link"
import AccountMenu from "./Menu"
import { MenuIcon, SearchIcon, UserCircleIcon, AcademicCapIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"


function Header() {
  return (
    <header className="sticky flex justify-between p-3 mx-auto shadow-md">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <h1 className="text-3xl pl-3 cursor-pointer font-sans font-bold text-blue">Obi<span className="text-darkdarkblue">One.io</span></h1>
            </Link>     
        </div>  
         
          
        
        <div className="hidden md:grid grid-cols-3 space-x-5  "> 
                
            <div className="cursor-pointer">
                <div className="flex justify-center">
                <Link href="/learningpath/">
                    <AcademicCapIcon className="h-7 fill-darkdarkblue "/>
                </Link>
                </div>  
                <div className="flex justify-center">   
                <Link href="/">
                    <h3 className="text-xs font-light">Learn</h3>
                </Link>
                </div> 
              
            </div>
            
            <div className="cursor-pointer">

                <div className="flex justify-center">
                <Link href="/faq/">
                    <QuestionMarkCircleIcon className="h-7 fill-darkdarkblue "/>
                </Link>
                </div>  
                <div className="flex justify-center">  
                <Link href="/">  
                    <h3 className="text-xs font-light">FAQ</h3>
                </Link>
                </div> 
            
            </div>
            
        </div> 
         
    </header>
  )
}

export default Header