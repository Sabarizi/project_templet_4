"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import AddToCartButton from "@/app/compunents/AddToCartButton";

// ✅ Corrected: Using `shoplist` instead of `products`
const shoplist = [
  {
    _id: "1",
    id: 1,
    name: "Accumsan tincidunt",
    description: "Consectetur adipiscing elit.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/Rectangle 32.png",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: "2",
    id: 2,
    name: "In nulla",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/Rectangle 32 (1).png",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
];

export default function ShopProductPage() {
  const params = useParams();
  let productId: number;

  if (Array.isArray(params.id)) {
    productId = parseInt(params.id[0], 10);
  } else {
    productId = parseInt(params.id, 10);
  }

  // ✅ Fixed: Changed `products` to `shoplist`
  const product = shoplist.find((p) => p.id === productId);

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
          <h1 className="text-3xl font-bold text-[#151875] mb-2">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center space-x-4 mt-2">
            <p className="text-2xl font-bold text-[#FB2E86]">${product.price}</p>
            <p className="text-gray-400 line-through">${product.oldPrice}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-200"}`}>
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

          {/* Add to Cart Button */}
          <div className="flex gap-4">
            <AddToCartButton product={product} />

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
