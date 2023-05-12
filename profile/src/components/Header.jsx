import React from 'react'
import logo from '../images/png/logo-color.png'
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="bg-gray-900 w-full flex">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex items-center w-full">
            <a href="#" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-20 w-20 object-contain"/>
            </a>
            <div className="hidden md:block justify-center">
            <div className="ml-10 flex  space-x-4 items-center">
            <input type="text" placeholder="Search" className="border border-gray-400 rounded py-2 px-4 mr-2" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
            </button>

                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 border border-gray-400 rounded shadow">Home</a>
                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 border border-gray-400 rounded shadow">About</a>
                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 border border-gray-400 rounded shadow">Services</a>
                <a href="#" className="text-gray-300  hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 border border-gray-400 rounded shadow">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Insert any additional header items here */}
              <button className="bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Home
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
