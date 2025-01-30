import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiscountItem = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-4 order-2 lg:order-1">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
            Discount Item
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 text-sm text-gray-600">
            <a href="#" className="text-pink-500 hover:underline">
              Wood Chair
            </a>
            <span className="hidden lg:inline">•</span>
            <a href="#" className="hover:underline">Plastic Chair</a>
            <span className="hidden lg:inline">•</span>
            <a href="#" className="hover:underline">Sofa Collection</a>
          </div>

          {/* Discount Details */}
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-800">
            20% Discount On All Products
          </h3>
          <p className="text-pink-500 font-medium">Eams Sofa Compact</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span>
              Material expose like metals
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span>
              Clear lines and geometric figures
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span>
              Simple neutral colors
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span>
              Material expose like metals
            </li>
          </ul>

          {/* Button */}
          <Link href={'/ShopLeft'}>
          <button className="bg-pink-500 text-white py-3 px-6 rounded-md shadow-md text-sm hover:bg-pink-600 transition mt-4">
            Shop Now
          </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative order-1 lg:order-2 mt-6 lg:mt-0">
          <Image
            src="/Group 154.png" // Replace with the actual path of your sofa image
            alt="Discount Item"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
