export default function CartPage() {
    // Array of products with individual images and details
    const products = [
      {
        id: 1,
        name: "Brown Leather Bag",
        image: "cart1.png", // Replace with your image URL
        color: "Brown",
        size: "XL",
        price: 32.0,
        quantity: 1,
      },
      {
        id: 2,
        name: "Black Handbag",
        image: "cart2.png", // Replace with your image URL
        color: "Black",
        size: "M",
        price: 45.0,
        quantity: 2,
      },
      {
        id: 3,
        name: "Red Crossbody Bag",
        image: "cart3.png", // Replace with your image URL
        color: "Red",
        size: "L",
        price: 25.0,
        quantity: 1,
      },
      {
        id: 4,
        name: "Gray Tote Bag",
        image: "cart4.png", // Replace with your image URL
        color: "Gray",
        size: "XL",
        price: 38.0,
        quantity: 3,
      },
      {
        id: 5,
        name: "Pink Mini Bag",
        image: "cart5.png", // Replace with your image URL
        color: "Pink",
        size: "S",
        price: 29.0,
        quantity: 1,
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-6">
        {/* Header Section */}
        <div className="w-full bg-gray-100 py-6">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Shopping Cart</h1>
            <p className="text-sm text-gray-600">
              Home . Pages . <span className="text-pink-500">Shopping Cart</span>
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Table */}
          <div className="lg:col-span-2">
            <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 p-4 text-left text-indigo-900 font-semibold">
                    Product
                  </th>
                  <th className="border border-gray-200 p-4 text-indigo-900 font-semibold">
                    Price
                  </th>
                  <th className="border border-gray-200 p-4 text-indigo-900 font-semibold">
                    Quantity
                  </th>
                  <th className="border border-gray-200 p-4 text-indigo-900 font-semibold">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border border-gray-200 p-4 flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500">Color: {product.color}</p>
                        <p className="text-xs text-gray-500">Size: {product.size}</p>
                      </div>
                    </td>
                    <td className="border border-gray-200 p-4 text-gray-800">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="border border-gray-200 p-4 text-gray-800">
                      <input
                        type="number"
                        className="w-16 border rounded-md p-1 text-sm focus:outline-none focus:ring-pink-500"
                        defaultValue={product.quantity}
                      />
                    </td>
                    <td className="border border-gray-200 p-4 text-gray-800">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600">
                Update Cart
              </button>
              <button className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600">
                Clear Cart
              </button>
            </div>
          </div>
  
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Cart Totals */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800">Cart Totals</h2>
              <div className="mt-4">
                <p className="flex justify-between text-gray-600">
                  <span>Subtotals:</span>
                  <span>£219.00</span>
                </p>
                <p className="flex justify-between text-gray-800 font-bold mt-2">
                  <span>Totals:</span>
                  <span>£325.00</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="mt-4 w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600">
                  Proceed To Checkout
                </button>
              </div>
            </div>
  
            {/* Calculate Shipping */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Calculate Shipping
              </h2>
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
                  placeholder="Country"
                />
                <input
                  type="text"
                  className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
                  placeholder="City/State"
                />
                <input
                  type="text"
                  className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
                  placeholder="Postal Code"
                />
                <button className="w-full bg-pink-500 text-white font-medium py-2 rounded-md hover:bg-pink-600">
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  