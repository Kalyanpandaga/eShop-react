import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
      </main>
    </div>
  );
}

export default HomePage;
