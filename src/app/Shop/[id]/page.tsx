"use client";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/compunents/AddToCartButton";

import { AiOutlineHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

// You could also import this from another file if you want to avoid duplicating
const shoplist = [
  {
    _id: 1,
    name: "Accumsan tincidunt",
    image: "/Rectangle 32.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: 2,
    name: "In nulla",
    image: "/Rectangle 32 (1).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: 3,
    name: "Vel sem",
    image: "/Rectangle 32 (2).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: 4,
    name: "Porttitor cum",
    image: "/Rectangle 32 (3).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: 5,
    name: "Nunc in",
    image: "/Rectangle 32 (4).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem Magna in est adipiscing.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: 6,
    name: "Vitae facilisis",
    image: "/Rectangle 32 (5).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "consectetur adipiscing elit. Magna in.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    _id: 7,
    name: "Curabitur lectus",
    image: "/Rectangle 32 (7).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
];

// Type for incoming props
interface SingleProductPageProps {
  params: {
    _id: string ; // or number if you parse it first
  };
}

export default function SingleProductPage({ params }: SingleProductPageProps) {
  // Convert the URL param to a number
  const productId = parseInt(params._id, 10);

  // Find the corresponding product
  const product = shoplist.find((p) => p._id === productId);

  // If product does not exist, handle it
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-red-600 text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="font-sans text-[#151875] max-w-6xl mx-auto py-10 px-6">
      {/* Breadcrumb / Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <Link href="/">Home</Link>
          <p>/</p>
          <Link href="/Shop">Shop List</Link>
          <p>/</p>
          <span className="text-[#FB2E86]">{product.name}</span>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md gap-6">
        {/* Product Image */}
        <div className="md:w-1/2 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-lg font-bold">{product.price}</span>
            <span className="text-red-500 line-through">
              {product.oldPrice}
            </span>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`${
                  index < product.rating ? "text-yellow-400" : "text-gray-300"
                } text-xl mr-1`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Product Description */}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Available Colors */}
          <div className="flex items-center gap-2 mb-4">
            <p className="font-semibold">Colors:</p>
            {product.colors.map((colorClass, idx) => (
              <span
                key={idx}
                className={`w-5 h-5 ${colorClass} rounded-full`}
              ></span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-4">
            <Link href="/Cart">
            <div className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-pink-500 hover:text-white transition duration-200 transform hover:scale-105">
                         <AddToCartButton product={product} />
                       </div>
            </Link>
            <Link href="/wishlist">
              <button className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition">
                <AiOutlineHeart size={24} />
              </button>
            </Link>
            <Link href={`/Shop/${product._id}`}>
              <button className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg">
                <FaSearch size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
