import React from "react";
import { Link } from "react-router";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold"> 🛍️ E-Shop</h3>
          <p className="mt-2 text-gray-400">Premium e-commerce experience</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white">
                products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-400 hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-gray-400">support@eshop.com</p>
          <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
        </div>
      </div>
      <p className="mt-8 text-center text-gray-400">
        © 2025 🛍️ E-Shop. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
