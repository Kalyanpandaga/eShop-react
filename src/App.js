import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import ProductListingPage from "./components/ProductListingPage";
import CartPage from "./components/CartPage";
import MiniCart from "./components/MiniCart";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans">
        <MiniCart />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
