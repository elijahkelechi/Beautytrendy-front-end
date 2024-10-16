// Preloader.jsx
import React from "react";
import { BsCart3, BsBoxSeam, BsTag } from "react-icons/bs"; // Importing some shopping-related icons

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-rose-200 via-rose-300 to-rose-400 z-50">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-rose-500 absolute"></div>
        <div className="flex space-x-4">
          {/* Animated Shopping Icons */}
          <BsCart3 size={28} className="text-rose-600 animate-bounce" />
          <BsBoxSeam
            size={28}
            className="text-rose-700 animate-bounce delay-100"
          />
          <BsTag size={28} className="text-rose-700 animate-bounce delay-200" />
        </div>
      </div>
      <p className="text-4xl font-extrabold text-white tracking-wider flashlight-animation">
        Sonna
        <span className="flashlight-animation text-rose-700 ">
          <span className="text-rose-700">Trendy</span>
        </span>
      </p>
      <p>Online Store</p>
      <p className="mt-2 text-white text-lg font-medium animate-pulse capitalize">
        Loading Products...
      </p>
    </div>
  );
};

export default Preloader;
