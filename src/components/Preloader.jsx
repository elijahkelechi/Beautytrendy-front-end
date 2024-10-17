// Preloader.jsx
import React from "react";
import { BsCart3, BsBoxSeam, BsTag } from "react-icons/bs"; // Importing some shopping-related icons

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-lime-200 via-lime-300 to-lime-400 z-50">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-lime-500 absolute"></div>
        <div className="flex space-x-4">
          {/* Animated Shopping Icons */}
          <BsCart3 size={28} className="text-info animate-bounce" />
          <BsBoxSeam size={28} className="text-info animate-bounce delay-100" />
          <BsTag size={28} className="text-info animate-bounce delay-200" />
        </div>
      </div>
      <p className="text-4xl font-extrabold text-gray-200 tracking-wider flashlight-animation">
        Sonna
        <span className="flashlight-animation text-info ">
          <span className="text-info">Trendy</span>
        </span>
      </p>
      <p>Online Store</p>
      <p className="mt-2 text-gray-200 text-lg font-medium animate-pulse capitalize">
        Loading Products...
      </p>
    </div>
  );
};

export default Preloader;
