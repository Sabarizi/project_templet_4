"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on Mobile, Shows on Larger Screens */}
      <aside className="w-full lg:w-1/4 p-4 border-b lg:border-r bg-gray-100 lg:block">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Product Brand</h2>
          {["Coaster Furniture", "Fusion Dot High Fashion", "Unique Furniture Restoration"].map(
            (brand) => (
              <label key={brand} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {brand}
              </label>
            )
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Discount Offer</h2>
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map((offer) => (
            <label key={offer} className="block mb-2">
              <input type="checkbox" className="mr-2" />
              {offer}
            </label>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Rating Item</h2>
          {[5, 4, 3].map((stars, index) => (
            <label key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span className="flex items-center">
                {"★".repeat(stars)}
                {"☆".repeat(5 - stars)}
              </span>
            </label>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          {["Prestashop", "Magento", "Bigcommerce", "osCommerce", "3dcart"].map((category) => (
            <label key={category} className="block mb-2">
              <input type="checkbox" className="mr-2" />
              {category}
            </label>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-full lg:w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center lg:text-left">Product Grid with Features</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 bg-white rounded-lg shadow-md">
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={284}
                height={197}
                className="w-full h-40 object-cover rounded-md"
              />

              {/* Product Details */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mt-1">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={`text-lg ${
                          index < product.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                </div>

                <p className="text-sm text-gray-600 mt-2">{product.description}</p>

                {/* Price and Old Price */}
                <div className="mt-2">
                  <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                  <span className="ml-2 line-through text-gray-500">${product.oldPrice}</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-2 flex space-x-2">
                  <Link
                    href={`/ShopLeft/${product.id}`}
                    className="px-4 py-2 border rounded text-blue-600 hover:bg-blue-50"
                  >
                    View Details
                  </Link>
                  <button className="text-gray-500 hover:text-indigo-600">❤</button>
                  <button className="text-gray-500 hover:text-indigo-600">🔍</button>
                  <button className="text-gray-500 hover:text-indigo-600">🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
