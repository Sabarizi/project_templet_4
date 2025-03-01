import React from "react";
import Image from "next/image";
import Head from "next/head"
import Link from "next/link";

import client from '@sanity/client'; // Import the sanity client

const fetchData = async () => {
  const query = `*[_type == "productSchema"]`;  // Your Sanity query
  const products = await (query);
  console.log(products);  // Display the fetched products
};

fetchData();

const HeroSection = () => {
  return (
    <>
      <Head>
        {/* Viewport meta tag ensures proper scaling on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <section className="bg-purple-50 relative py-12">
        <div className="container mx-auto px-6">
          {/* Maintain the original flex-col by default */}
          {/* On large screens, arrange items horizontally and centered */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative gap-8">

            {/* Lamp Section */}
            {/* Keep your original classes for xs and sm */}
            {/* On lg: position statically for horizontal alignment */}
            <div className="flex justify-center lg:absolute justify-start lg:static">
              <Image
                src="/pic.png" // Update with your lamp image path
                alt="Lamp"
                width={150}
                height={150}
                className="w-60 h-60 mb-72 ml-12" 
              />
            </div>

            {/* Text Content */}
            {/* Retain xs/sm classes, override positioning at lg */}
            <div className="flex-1 space-y-4 xs:absolute xs:top-96 sm:space-y-6 sm:text-xl sm:absolute sm:top-80 lg:static lg:mt-0 lg:text-left lg:ml-64">
              <h4 className="text-pink-500 text-sm uppercase font-semibold sm:text-lg">
                Best Furniture For Your Castle...
              </h4>
              <h1 className="text-gray-800 text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
                New Furniture Collection <br /> Trends in 2020
              </h1>
              <p className="text-gray-600 lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est 
                <br /> adipiscing in phasellus non in justo.
              </p><Link href={"/products"}>
              <button className="bg-pink-500 text-white py-3 px-6 rounded-md shadow-md text-sm hover:bg-pink-600 transition">
                Shop Now
              </button>
              </Link>
            </div>

            {/* Sofa Section */}
            {/* At lg, this flows to the right as we've used lg:flex-row and lg:justify-between */}
            <div className="flex justify-center lg:justify-end mr-28 sm:mt-72 xs:mt-60 lg:static lg:m-0 lg:mr-32">
              <Image
                src="/pic2.png" // Update with your sofa image path
                alt="Sofa"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Decorative Dots - unchanged */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;