import React from "react";
import { FaShoppingCart, FaGift, FaTags } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
const MobileMessage = () => {
  return (
    <>
      <div className=" md:hidden flex-col items-center justify-center  space-y-2">
        <h1 className="relative text-center text-sm font-bold text-stone-50 bg-gradient-to-r from-rose-400 to-rose-600 p-1 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          Sonna Cares About Your Skin
        </h1>

        <div className="flex space-x-3 mt-0 place-content-center">
          {/* Icon 1 */}
          <div className="flex flex-col items-center">
            <FaTruck className="text-2xl text-rose-500 animate-bounce" />
            <p className="text-sm font-semibold text-primary-content">
              Fast Delivery
            </p>
          </div>
          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <FaGift className="text-2xl text-rose-500" />
            <p className="text-sm font-semibold text-primary-content">
              Exclusive Gifts
            </p>
          </div>
          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <FaTags className="text-2xl text-rose-500 animate-spin" />
            <p className="text-sm font-semibold text-primary-content">
              Best Prices
            </p>
          </div>
        </div>

        {/* Additional info */}
      </div>
    </>
  );
};

export default MobileMessage;
