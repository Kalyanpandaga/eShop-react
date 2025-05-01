import React, { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function MiniCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cart.items.length}
        </span>
      </button>
      {isOpen && (
        <div className="fixed top-16 right-4 w-80 bg-white shadow-xl rounded-lg max-h-[80vh] overflow-y-auto">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">Your Cart</h3>
            {cart.items.length === 0 ? (
              <p className="mt-4 text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="mt-4 flex items-center border-b pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-gray-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-lg font-semibold text-gray-900">
                    Subtotal: ${subtotal.toFixed(2)}
                  </p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Link
                    to="/cart"
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-center hover:bg-gray-300 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    View Cart
                  </Link>
                  <button
                    disabled
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md opacity-50 cursor-not-allowed"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniCart;
