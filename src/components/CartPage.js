import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-500">Your cart is empty</p>
          <Link
            to="/products"
            className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8">
          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              {cart.items.map((item) => (
                <li key={item.id} className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-lg font-medium text-gray-900">
                        <h3 className="truncate">{item.title}</h3>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-gray-600">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-medium text-gray-900 mt-2">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-900 mt-4">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <button
              disabled
              className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md opacity-50 cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
