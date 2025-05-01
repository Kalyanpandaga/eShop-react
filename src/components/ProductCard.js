import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition">
      <div className="w-full h-64 bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain object-center p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-semibold text-indigo-600">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
