"use client";
import AddToCartButton from "../../compunents/AddToCartButton"
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Dictum Morbi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop1.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Sodales Sit",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Nibh Varius",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop3.png",
    rating: 3,
  },
  {
    id: 4,
    name: "Mauris Quis",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop4.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Mauris Quis",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop5.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Mauris Quis",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop6.png",
    rating: 2,
  },
];

export default function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Grab the product ID from the URL
  const productId = parseInt(params.id, 10);

  // Find the product from our array
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Star Rating */}
          <div className="flex items-center mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={`mr-1 ${
                    i < product.rating ? "text-yellow-500" : "text-gray-300"
                  } text-xl`}
                >
                  ★
                </span>
              ))}
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Price */}
          <div className="mb-4">
            <span className="text-2xl text-indigo-700 font-bold">
              ${product.price}
            </span>
            <span className="ml-3 line-through text-gray-400">
              ${product.oldPrice}
            </span>
          </div>

          {/* Color Dots Example */}
          <div className="flex space-x-2 mb-4">
            <span className="w-5 h-5 bg-red-500 rounded-full"></span>
            <span className="w-5 h-5 bg-green-500 rounded-full"></span>
            <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            {/* <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Add to Cart
            </button> */}
            <div className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-pink-500 hover:text-white transition duration-200 transform hover:scale-105">
                                      <AddToCartButton product={product} />
                                    </div>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
