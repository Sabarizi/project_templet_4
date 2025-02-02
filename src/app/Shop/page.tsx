"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/Rectangle 32.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-orange-500", "bg-pink-500", "bg-purple-500"],
  },
  {
    id: 2,
    name: "In nulla",
    image: "/Rectangle 32 (1).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-orange-500", "bg-pink-500", "bg-purple-500"],
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/Rectangle 32 (2).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 4,
    name: "Porttitor cum",
    image: "/Rectangle 32 (3).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 5,
    name: "Nunc in",
    image: "/Rectangle 32 (4).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem Magna in est adipiscing.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 6,
    name: "Vitae facilisis",
    image: "/Rectangle 32 (5).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Consectetur adipiscing elit. Magna in.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 7,
    name: "Curabitur lectus",
    image: "/Rectangle 32 (7).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
];

const ShopList = () => {
  return (
    <div className="font-sans text-[#151875] px-4 sm:px-6 lg:px-8">
      {/* Header / Breadcrumb */}
      <div className="py-8 bg-gray-100 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Ecommerce Accessories & Fashion Items</h1>
        <p className="text-gray-600 mt-2">About 9,620 results (0.62 seconds)</p>
      </div>

      {/* Sorting Options */}
      <div className="flex flex-col sm:flex-row sm:justify-between py-4 px-6 bg-gray-50 shadow-sm">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <label htmlFor="per-page" className="text-sm text-gray-600">Per Page:</label>
          <input id="per-page" type="text" className="border rounded px-2 py-1 text-sm focus:outline-none" />
        </div>
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <label htmlFor="sort-by" className="text-sm text-gray-600">Sort By:</label>
          <select id="sort-by" className="border rounded px-2 py-1 text-sm focus:outline-none">
            <option>Best Match</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="view" className="text-sm text-gray-600">View:</label>
          <input id="view" type="text" className="border rounded px-2 py-1 text-sm focus:outline-none" />
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoplist.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="w-full h-auto object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1 text-center mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center justify-center mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-200"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center justify-center gap-4 mt-2">
                <span className="text-lg font-bold text-[#151875]">{product.price}</span>
                <span className="text-red-500 line-through">{product.oldPrice}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span key={index} className={`w-4 h-4 ${color} rounded-full`}></span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Link href="/cart">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <AiOutlineShoppingCart size={20} />
                  </button>
                </Link>
                <Link href="/wishlist">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <AiOutlineHeart size={20} />
                  </button>
                </Link>
                <Link href={`/Shop/${product.id}`}>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <FaSearch size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
