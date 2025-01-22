"use client"; // <-- This makes it a Client Component

import React from "react";

export default function AddToCartButton({ product }: { product: any }) {
  const handleAddToCart = () => {
    if (typeof window === "undefined") return; // Safety check

    // Retrieve existing cart from localStorage or create an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if this product is already in the cart
    const index = existingCart.findIndex((item: any) => item._id === product._id);

    if (index >= 0) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image ? product.image : "/placeholder.png",
        quantity: 1,
      });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
    >
      Add to Cart
    </button>
  );
}
