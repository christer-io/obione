
import { RxGithubLogo } from "react-icons/fa"

function Header() {
  return (
    <div>
        <header>
    <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://obione.io" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap text-[#4D8FE4]">Obi</span>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">One.io</span>
            </a>
        
            <div class="flex items-center lg:order-2">
                <a href="https://chat.obione.io" class="text-white  focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">ObiOne ChatGPT</a>
                
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/post/opensource-license" class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white" aria-current="page">Licensing</a>
                    </li>
                    <li>
                        <a href="/post/opensource" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Open Source</a>
                    </li>
                    <li>
                        <a href="/post/standards-and-protocols" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Open Standards</a>
                    </li>
                    <li>
                        <a href="/post/open-data" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Open Data</a>
                    </li>
                    
            
                </ul>
            </div>
        </div>
    </nav>
</header>
    </div>
  )
}

export default Header