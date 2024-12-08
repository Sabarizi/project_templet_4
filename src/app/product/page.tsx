import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Vel elit euismod",
      image: "/image5.png",
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 2,
      title: "Ultrices condimentum imperdiet",
      image: "/image2.png",
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 3,
      title: "Vitae suspendisse sed",
      image: "/image1.png",
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 4,
      title: "Sed at fermentum",
      image: "/image4.png",
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 5,
      title: "Fusce pellentesque at",
      image: "/image6.png",
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 6,
      title: "Vestibulum magna laoreet",
      image: "/image7.png",
      price: 26.0,
      discountedPrice: 42.0,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-purple-50 py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-900">Shop Grid Default</h1>
          <p className="text-sm text-gray-600">
            Home . Pages . <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-lg font-bold text-indigo-900">
              Ecommerce Accessories & Fashion Item
            </h2>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <label htmlFor="perPage" className="text-sm text-gray-700 mr-2">
                Per Page:
              </label>
              <input
                id="perPage"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-20"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="sortBy" className="text-sm text-gray-700 mr-2">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="bestMatch">Best Match</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center">
              <label htmlFor="view" className="text-sm text-gray-700 mr-2">
                View:
              </label>
              <input
                id="view"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4 rounded-md"
                />

                {/* Product Title */}
                <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
                  {product.title}
                </h3>

                {/* Color Dots */}
                <div className="flex space-x-2 justify-center mb-2">
                  <span className="w-4 h-4 bg-orange-400 rounded-full"></span>
                  <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
                </div>

                {/* Product Price */}
                <div className="text-sm">
                  <span className="text-indigo-600 font-bold mr-2">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400">
                    ${product.discountedPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
