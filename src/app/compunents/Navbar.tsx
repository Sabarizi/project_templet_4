"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

export default function Navbar() {
  const router = useRouter();
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const [wishlistCount] = useState<number>(2);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white px-4 py-2 text-sm flex justify-between items-center">
        <div className="hidden sm:flex space-x-4">
          <div className="flex items-center space-x-2">
            <MdOutlineEmail /> <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneVolume /> <span>(12345)67890</span>
          </div>
        </div>
        <div className="flex space-x-4">
          
          <a href="/Login" className="flex items-center">
            Log in <GoPerson className="ml-1" />
          </a>
          <a href="/wishlist" className="relative flex items-center">
            Wishlist <FaRegHeart className="ml-1" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </a>
          <a href="/Cart" className="relative flex items-center">
            Cart <LuShoppingCart className="ml-1" />
            {hydrated && cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-serif text-purple-600">Hekto</h1>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6 items-center">
            <div className="relative">
              <button
                className="text-gray-900 hover:text-purple-600 flex items-center"
                onClick={toggleHomeDropdown}
              >
                Home <FaChevronDown className="ml-1 text-xs" />
              </button>
              {isHomeDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md w-40 z-10">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                    Home
                  </a>
                  <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                    About Us
                  </a>
                  <a href="/ShopLeft" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                    Shop Left Side
                  </a>
                </div>
              )}
            </div>
            <a href="/products" className="text-gray-900 hover:text-purple-600">Products</a>
            <a href="/Blog" className="text-gray-900 hover:text-purple-600">Blog</a>
            <a href="/Contact" className="text-gray-900 hover:text-purple-600">Contact</a>
            <a href="/Shop" className="text-gray-900 hover:text-purple-600">Shop</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-purple-600" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t shadow-md p-4 space-y-4">
          <div>
            <button
              className="flex items-center w-full text-left text-gray-900 hover:bg-gray-200 py-2"
              onClick={toggleHomeDropdown}
            >
              Home <FaChevronDown className="ml-1 text-xs" />
            </button>
            {isHomeDropdownOpen && (
              <div className="ml-4 space-y-2">
                <a href="/" className="block text-sm text-gray-700 hover:bg-gray-200 py-1">Home</a>
                <a href="/about" className="block text-sm text-gray-700 hover:bg-gray-200 py-1">About Us</a>
                <a href="/ShopLeft" className="block text-sm text-gray-700 hover:bg-gray-200 py-1">Shop Left Side</a>
              </div>
            )}
          </div>
          <a href="/products" className="block text-gray-900 hover:bg-gray-200 py-2">Products</a>
          <a href="/Blog" className="block text-gray-900 hover:bg-gray-200 py-2">Blog</a>
          <a href="/Contact" className="block text-gray-900 hover:bg-gray-200 py-2">Contact</a>
          <a href="/Shop" className="block text-gray-900 hover:bg-gray-200 py-2">Shop</a>
        </div>
      )}
    </>
  );
}
