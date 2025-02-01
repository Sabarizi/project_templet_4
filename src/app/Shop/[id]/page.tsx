"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import AddToCartButton from "@/app/compunents/AddToCartButton";

// Fixed `shoplist` by adding `_id` to each product
const shoplist = [
  {
    _id: "1", // Added _id
    id: 1,
    name: "Accumsan tincidunt",
    image: "/Rectangle 32.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: "2",
    id: 2,
    name: "In nulla",
    image: "/Rectangle 32 (1).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: "3",
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
    _id: "4",
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
    _id: "5",
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
    _id: "6",
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
    _id: "7",
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

export default function ShopProductPage() {
  // Access `id` from the URL using Next.js `useParams()`
  const params = useParams();
  let productId: number;

  if (Array.isArray(params.id)) {
    productId = parseInt(params.id[0], 10);
  } else {
    productId = parseInt(params.id, 10);
  }

  // Find the matching product
  const product = shoplist.find((p) => p.id === productId);

  // If no product found, show message
  if (!product) {
    return (
      <div className="p-8">
        <h2 className="text-2xl text-red-500 font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side: Product Image */}
        <div className="lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right side: Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#151875] mb-2">
            {product.name}
          </h1>

          {/* Price and Old Price */}
          <div className="flex items-center space-x-4 mt-2">
            <p className="text-2xl font-bold text-[#FB2E86]">{product.price}</p>
            <p className="text-gray-400 line-through">{product.oldPrice}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-lg ${
                  index < product.rating ? "text-yellow-400" : "text-gray-200"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4 mb-6">{product.description}</p>

          {/* Colors */}
          <div className="flex items-center gap-2 mb-4">
            <p className="font-medium">Colors:</p>
            {product.colors.map((clr, idx) => (
              <span key={idx} className={`w-5 h-5 ${clr} rounded-full`}></span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {/* Add to Cart */}
            <div className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-500 hover:text-white transition duration-200 transform hover:scale-105">
              <AddToCartButton product={product} />
            </div>

            {/* Wishlist */}
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex items-center gap-2 hover:bg-pink-400 transition-all">
              <AiOutlineHeart size={20} />
              Wishlist
            </button>

            {/* Quick View */}
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex items-center gap-2 hover:bg-blue-200 transition-all">
              <FaSearch size={20} />
              Quick View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
