import { Link, useLoaderData } from "react-router-dom";
import formatPrice from "../utils/index";
import { FaTruck } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import Filters from "./Filters";

const ProductList = () => {
  const { products } = useLoaderData(); // Load data using React Router's loader

  return (
    <div>
      <div className="bg-white py-3  text-center ">
        <h1 className="text-xl md:text-2xl px-2 text-gray-700 font-bold">
          Welcome to Our Store
        </h1>
        <p className="px-2">Browse our products and find the best deals!</p>
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-7 gap-x-40">
        {/* Filters Column */}
        <div className="hidden md:block md:col-span-2">
          <Filters />
        </div>

        {/* Products Column */}
        <div className="grid gap-y-6 gap-1 md:gap-2 lg:gap-4 md:col-span-5 px-1 md:px-3 pt-6">
          {/* Display products */}
          {products.map((product) => {
            const { id, name, image, price, freeShipping } = product;
            const nairaAmount = formatPrice(price);

            return (
              <Link key={id} to={`/products/${product.id}`}>
                <div className="grid grid-cols-5 w-full px-2 md:px-4 lg:px-5 rounded-t-sm rounded-lg h-auto transition-transform duration-200 hover:md:shadow-lg hover:border hover:md:border-gray-300 hover:md:scale-105">
                  <div className="col-span-2">
                    {/* Product Image */}
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-32 md:h-36 lg:h-44 rounded-b-lg object-cover"
                    />
                  </div>

                  <div className="col-span-3">
                    {/* Product Info */}
                    <div className="p-3">
                      <h3 className="text-xs font-semibold">{name}</h3>

                      {/* Free Delivery Section with background glow */}
                      <p className="flex items-center mt-2 text-xs font-semibold">
                        {freeShipping ? (
                          <>
                            <span className="bg-glow p-2 rounded-full bg-rose-200 animate-pulse mr-2">
                              <FaTruck className="text-lg text-rose-600 animate-bounce" />
                            </span>
                            <span className="text-green-700 glow-effect">
                              Free Delivery
                            </span>
                          </>
                        ) : null}
                      </p>

                      {/* Price Section */}
                      <p className="flex items-center mt-2 font-bold text-rose-700 md:text-lg">
                        <BsTagFill className="mr-2 text-rose-600" />
                        {nairaAmount}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
