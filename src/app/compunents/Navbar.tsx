"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  // Mobile menu states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  // Topbar dropdowns
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  // Example counts (wishlist, cart)
  // In a real app, you'd get these from Redux, Context, or server.
  const [wishlistCount] = useState<number>(2);
  const [cartCount] = useState<number>(3);
  

  // For search bar
  const [searchValue, setSearchValue] = useState("");

  // Toggles
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };
  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };
  const toggleCurrencyDropdown = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Navigate to /products?search=query or just /products
    // Adjust as needed.
    router.push(`/products?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar content */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 space-y-2 sm:space-y-0">
            {/* Left side: Email & Phone */}
            <div className="flex space-x-4 text-sm font-semibold">
              <div className="flex items-center space-x-2">
                <MdOutlineEmail className="text-lg" />
                <span>mhhasanul@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneVolume className="text-lg" />
                <span>(12345)67890</span>
              </div>
            </div>

            {/* Right side: Language, Currency, Login, Wishlist, Cart */}
            <div className="flex items-center space-x-4 relative">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center"
                  onClick={toggleLangDropdown}
                >
                  English
                  <FaChevronDown className="ml-1 text-xs" />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black border shadow-md rounded w-28 z-10">
                    <button
                      onClick={() => {
                        console.log("Language set: English");
                        setIsLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        console.log("Language set: Spanish");
                        setIsLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Spanish
                    </button>
                    <button
                      onClick={() => {
                        console.log("Language set: French");
                        setIsLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      French
                    </button>
                  </div>
                )}
              </div>

              {/* Currency Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center"
                  onClick={toggleCurrencyDropdown}
                >
                  USD
                  <FaChevronDown className="ml-1 text-xs" />
                </button>
                {isCurrencyOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black border shadow-md rounded w-28 z-10">
                    <button
                      onClick={() => {
                        console.log("Currency set: USD");
                        setIsCurrencyOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      USD
                    </button>
                    <button
                      onClick={() => {
                        console.log("Currency set: EUR");
                        setIsCurrencyOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      EUR
                    </button>
                    <button
                      onClick={() => {
                        console.log("Currency set: GBP");
                        setIsCurrencyOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      GBP
                    </button>
                  </div>
                )}
              </div>

              {/* Login */}
              <div className="flex items-center space-x-1">
                <a href="/Login" className="flex items-center">
                  Log in <GoPerson className="ml-1" />
                </a>
              </div>

              {/* Wishlist with badge */}
              <div className="relative flex items-center space-x-1">
                <a href="/wishlist">Wishlist</a>
                <FaRegHeart />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </div>

              {/* Cart with badge */}
              <div className="relative flex items-center space-x-1">
                <a href="/Cart">Cart</a>
                <LuShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar (Second Navbar) */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <h1 className="text-2xl font-serif text-purple-600">Hekto</h1>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6 items-center">
              {/* Home Dropdown */}
              <div className="relative">
                <button
                  className="text-pink-500 hover:text-pink-600 flex items-center"
                  onClick={toggleHomeDropdown}
                >
                  Home
                  <FaChevronDown className="ml-1 text-xs text-pink-500" />
                </button>
                {isHomeDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md w-40 z-10">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      About Us
                    </a>
                    <a
                      href="/ShopLeft"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      Shop Left Side
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/products"
                className="text-gray-900 hover:text-purple-600"
              >
                Products
              </a>
              <a href="/Blog" className="text-gray-900 hover:text-purple-600">
                Blog
              </a>
              <a
                href="/Contact"
                className="text-gray-900 hover:text-purple-600"
              >
                Contact
              </a>
              <a href="/Shop" className="text-gray-900 hover:text-purple-600">
                Shop
              </a>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex items-center ml-6">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="bg-pink-500 text-white p-2 rounded-r-md"
                >
                  <FaSearch />
                </button>
              </form>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-purple-600"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {/* Icon (Hamburger) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {/* Home dropdown in mobile */}
              <div>
                <button
                  className="flex items-center w-full text-left text-gray-900 hover:bg-gray-200 py-2"
                  onClick={toggleHomeDropdown}
                >
                  Home
                  <FaChevronDown className="ml-1 text-xs" />
                </button>
                {isHomeDropdownOpen && (
                  <div className="ml-4 space-y-2">
                    <a
                      href="/"
                      className="block text-sm text-gray-700 hover:bg-gray-200 py-1"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="block text-sm text-gray-700 hover:bg-gray-200 py-1"
                    >
                      About Us
                    </a>
                    <a
                      href="/ShopLeft"
                      className="block text-sm text-gray-700 hover:bg-gray-200 py-1"
                    >
                      Shop Left Side
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/products"
                className="block text-gray-900 hover:bg-gray-200 py-2"
              >
                Products
              </a>
              <a
                href="/Blog"
                className="block text-gray-900 hover:bg-gray-200 py-2"
              >
                Blog
              </a>
              <a
                href="/Contact"
                className="block text-gray-900 hover:bg-gray-200 py-2"
              >
                Contact
              </a>
              <a
                href="/Shop"
                className="block text-gray-900 hover:bg-gray-200 py-2"
              >
                Shop
              </a>

              {/* Mobile Search Bar */}
              <form onSubmit={handleSearch} className="flex mt-2">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="bg-pink-500 text-white p-2 rounded-r-md"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
