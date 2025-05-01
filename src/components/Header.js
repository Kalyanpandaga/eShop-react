import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">🛍️ E-Shop</h1>
        <nav className="flex space-x-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 text-lg">
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-indigo-600 text-lg"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-gray-600 hover:text-indigo-600 text-lg"
          >
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
