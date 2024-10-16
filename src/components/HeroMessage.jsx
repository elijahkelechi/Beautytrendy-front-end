import React from "react";
import { FaShoppingCart, FaGift, FaTags } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const HeroMessage = () => {
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-center md:pl-4 space-y-4">
        <h1 className="relative  text-center md:px-14 lg:px-16 md:py-12 lg:py-14 md:text-xl lg:2xl font-bold text-white bg-gradient-to-r from-rose-400 to-rose-600 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <span className="animate-bounce"> Sonna Cares About Your Skin</span>
        </h1>

        <div className="flex space-x-4 mt-4">
          {/* Icon 1 */}
          <div className="flex flex-col items-center">
            <FaTruck className="text-3xl text-rose-500 animate-bounce" />
            <p className="text-sm font-semibold text-gray-700">Fast Delivery</p>
          </div>
          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <FaGift className="text-3xl text-rose-500" />
            <p className="text-sm font-semibold text-gray-700">
              Exclusive Gifts
            </p>
          </div>
          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <FaTags className="text-3xl text-rose-500 animate-spin" />
            <p className="text-sm font-semibold text-gray-700">Best Prices</p>
          </div>
        </div>

        {/* Additional info */}
        <p className="text-center text-gray-700 font-medium mt-2">
          Shop with us for the best deals and amazing offers. We guarantee
          customer satisfaction with every purchase!
        </p>
      </div>
    </>
  );
};

export default HeroMessage;
