import React from "react";
import stripeUi from "../assets/images/stripe-ui.png";


const HeroSection = () => {
  return (
    <section className="pt-20 pb-28 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <button className="mb-6 px-4 py-1 bg-white/20 text-white text-sm rounded-full font-medium shadow">
            Preview
          </button>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight space-y-2 text-black">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-red-600 to-black">
              Financial
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black ">
              infrastructure
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
              to grow your
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-800">
              revenue
            </span>
          </h1>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="h-[500px] bg-white rounded-3xl shadow-2xl p-2">
            <img
              src={stripeUi}
              alt="Stripe UI"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
