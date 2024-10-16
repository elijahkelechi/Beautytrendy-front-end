import { Link, useLoaderData } from "react-router-dom";
import formatPrice from "../utils/index";
import { FaTruck } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import LandingPagination from "./LandingPagination";

const LandingProducts = () => {
  const { products } = useLoaderData(); // Load data using React Router's loader

  return (
    <div>
      {/* Other components that should always display */}
      <div className=" grid grid-col-2 bg-white py-1 text-left">
        <h1 className="text-lg md:2xl px-2 text-gray-700 font-bold">
          More to Discover
        </h1>
        <Link to="/products" className="btn btn-sm animate-pulse mr-0 py-0">
          Explore More Now!
        </Link>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-4 px-1 md:px-3 pt-6">
        {/* Display products */}
        {products.map((product) => {
          const { id, name, image, price, freeShipping } = product;
          const nairaAmount = formatPrice(price);

          return (
            <Link key={id} to={`/products/${product.id}`}>
              <div className="px-2 md:px-4 lg:px-5 rounded-t-sm rounded-lg h-auto md:w-64 transition-transform duration-200 hover:md:shadow-lg hover:border hover:md:border-gray-300 hover:md:scale-105">
                {/* Product Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-32 md:h-36 lg:h-44 rounded-b-lg object-cover"
                />

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
            </Link>
          );
        })}
      </div>
      <LandingPagination />
    </div>
  );
};

export default LandingProducts;
