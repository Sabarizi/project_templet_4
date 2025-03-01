import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hekto</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-3 rounded-md border border-gray-300"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold">
            <a href='/Login'>Sign Up</a> 
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Contact Info <br /> 17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
          <a href="/HacktoDemo">Hackto Demo</a>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Care</h2>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Pages</h2>
          <ul className="space-y-2 text-gray-600">
            <a href="/Blog">Blog</a>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <a href="/Faqs" className="hover:text-gray-800">
                FAQs
              </a>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        ©Webecy - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
