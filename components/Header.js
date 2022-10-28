import Link from "next/link"
import AccountMenu from "./Menu"


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto ">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <h1 className="text-3xl cursor-pointer font-sans font-bold text-blue">Obi-<span className="text-darkdarkblue">One.io</span></h1>
            </Link>     
        </div>    
        <div>
            <AccountMenu />
        </div>  
    </header>
  )
}

export default Header