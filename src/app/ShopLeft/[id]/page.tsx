"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import AddToCartButton from "@/app/compunents/AddToCartButton";

const shoplist = [
  { _id: 1, id: 1, name: "Dictum Morbi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 26.0, oldPrice: 52.0, image: "/shop1.png", rating: 4 },
  { _id: 2, id: 2, name: "Sodales Sit", description: "Magna in est adipiscing in phasellus non in justo.", price: 26.0, oldPrice: 52.0, image: "/shop2.png", rating: 5 },
  { _id: 3, id: 3, name: "Nibh Varius", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 26.0, oldPrice: 52.0, image: "/shop3.png", rating: 3 },
  { _id: 4, id: 4, name: "Mauris Quis", description: "Magna in est adipiscing in phasellus non in justo.", price: 26.0, oldPrice: 52.0, image: "/shop4.png", rating: 4 },
  { _id: 5, id: 5, name: "Mauris Quis", description: "Magna in est adipiscing in phasellus non in justo.", price: 26.0, oldPrice: 52.0, image: "/shop5.png", rating: 5 },
  { _id: 6, id: 6, name: "Mauris Quis", description: "Magna in est adipiscing in phasellus non in justo.", price: 26.0, oldPrice: 52.0, image: "/shop6.png", rating: 2 },
];

export default function ShopProductPage() {
  const params = useParams();
  let productId = Array.isArray(params.id) ? parseInt(params.id[0], 10) : parseInt(params.id, 10);

  const product = shoplist.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl text-red-500 font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <Image src={product.image} alt={product.name} width={500} height={400} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-[#151875] mb-2">{product.name}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <p className="text-xl md:text-2xl font-bold text-[#FB2E86]">${product.price}</p>
            <p className="text-gray-400 line-through">${product.oldPrice}</p>
          </div>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
            ))}
          </div>
          <p className="text-gray-600 mt-4 mb-6">{product.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AddToCartButton product={product} />
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex items-center gap-2 hover:bg-pink-400 transition-all">
              <AiOutlineHeart size={20} /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
