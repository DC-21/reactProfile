import React from 'react'
import logo from '../images/png/logo-color.png'
import { BsSearch } from 'react-icons/bs';


const Header = () => {
  return (
    <header className="bg-gray-900 w-full flex">
      <nav className="container mx-auto px-2 md:px-4 lg:px-8 w-full flex">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex items-center w-full justify-between">
            <a href="#" className="flex-shrink-0">
              <img src={logo} alt="Logo" className=" h-16 md:h-20 w-16 md:w-20 object-contain hover:animate-pulse"/>
            </a>
            <div className="hidden md:block justify-center">
            <div className="ml-10 flex  space-x-4 items-center">
            <input type="text" placeholder="Search" className="bg-gray-900 border-b-2 border-gray-400 py-2 px-4 mr-2 text-white focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <BsSearch />
            </button>

                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 rounded shadow">Home</a>
                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 rounded shadow">About</a>
                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 rounded shadow">Services</a>
                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 rounded shadow">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
