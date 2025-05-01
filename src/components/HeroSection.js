import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="relative bg-indigo-600">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Discover Your Style
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-indigo-100">
            Explore our curated collection of premium products designed for you.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
