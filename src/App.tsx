import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollSync from "./components/ScrollSync";
import Footer from "./components/Footer";
import CustomerShowcase from "./components/CustomerShowcase";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="relative overflow-hidden min-h-screen">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500" />
          <Navbar />
          <HeroSection />
        </div>

        <ScrollSync />
        <CustomerShowcase />
        <Footer />
      </div>
    </>
  );
}

export default App;
