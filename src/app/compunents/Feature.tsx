"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon, SearchIcon } from "@heroicons/react/outline";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/image 1168.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523202",
      price: "$42.00",
      image: "/image 1.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523203",
      price: "$42.00",
      image: "/image 1169.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523204",
      price: "$42.00",
      image: "/image 3.png",
    },
  ];

  return (
    <section className="py-12 mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-40">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative p-4 rounded-lg shadow-md bg-white overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Product Details */}
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              {/* Color Line */}
              <div className="flex justify-center gap-1 my-2">
                <div className="w-4 h-1 bg-green-500 rounded"></div>
                <div className="w-4 h-1 bg-pink-500 rounded"></div>
                <div className="w-4 h-1 bg-blue-500 rounded"></div>
              </div>
              <p className="text-sm text-gray-500">Code - {product.code}</p>
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
              <div className="flex gap-4 mb-4">
                <a href="/Cart"><ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer hover:text-green-500" /></a>
                <HeartIcon className="h-6 w-6 text-white cursor-pointer hover:text-red-500" />
                <SearchIcon className="h-6 w-6 text-white cursor-pointer hover:text-blue-500" />
              </div>
              <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
