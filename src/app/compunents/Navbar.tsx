"use client"; // Marking this component as Client-Side for React hooks

import { useState } from "react";
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* First Navbar (Purple with Wishlist and Cart) */}
      <div className="bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side: Logo */}
            <div className="flex  mx-2 text-white text-lg font-bold">
            <span className=" mx-2 w-4 h-4 text-[#ffffff]">
              <MdOutlineEmail />
            </span>
            <h1 className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
              mhhasanul@gmail.com
            </h1>

            </div>
            <div className="flex  mx-2 text-white text-lg font-bold">
            <span className=" mx-2 w-4 h-4 text-[#ffffff]">
              < FaPhoneVolume/>
            </span>
            <h1 className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
            (12345)67890

            </h1>

            </div>

            {/* Right Side: Wishlist, Cart, Language, and Currency */}
            <div className="flex items-center space-x-5">
              <a
                href="#"
                className="text-white hover:bg-purple-700 px-2 py-2 rounded-md text-sm font-medium"
              >
                English
              </a>
              <span className=" flex justify-center items-center  mx-2 w-[16px] h-[16px] text-white ">
             < FaChevronDown/>
            </span>
             
              <a
                href="#"
                className="text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                USD
              </a>
              <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] text-white ">
              < FaChevronDown/>
            </div>
              <a
                href="#"
                className="text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Wishlist
                 
              </a>
              <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] text-white ">
              <FaRegHeart />
            </div>

              <a
                href="#"
                className="text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Add to Cart
              </a>
              <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] text-white ">
              < LuShoppingCart/>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navbar (White with Centered Links + Search Bar) */}
      <div className="bg-white shadow-md">
        
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left Side: Links (Home, Products, Blog, Contact, Shop) */}
            <h1 className="text-3xl font-serif">Hekto</h1>
            <div className="flex space-x-6">
              <a
                href="/"
                className="text-red-500 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <span className=" flex justify-center items-center   my-3 w-[12px] h-[12px] text-red-500 ">
             < FaChevronDown/>
            </span>
              <a
                href="/pages"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </a>
              <a
                href="/Blog"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Shop
              </a>
            </div>

            {/* Right Side: Search Bar */}
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Search..."
              />
              <button className="ml-2 text-purple-600 hover:text-purple-800 bg-pink-500 py-2 px-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  
                  <FaSearch />
              
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (optional) */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="text-black text-lg font-bold">
            <span className="font-extrabold">Hekto</span>
          </div>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
