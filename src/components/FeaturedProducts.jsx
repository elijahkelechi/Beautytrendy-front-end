import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import formartPrice from "../utils/index";

const FeaturedProducts = () => {
  const { products } = useLoaderData();
  const [scrollPosition, setScrollPosition] = useState(0);
  const productWidth = 150; // Width of each product card
  const totalWidth = products.length * productWidth; // Total width of all products

  // Auto-scroll effect using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const nextPosition = prevPosition - 1; // Move left
        return nextPosition <= -totalWidth ? 0 : nextPosition; // Reset to 0 if at the end
      });
    }, 20); // Adjust speed (lower = faster)
    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="relative overflow-hidden w-full pt-[34rem] md:pt-[34.5rem] lg:pt-[40.5rem]">
      <div
        className="flex transition-transform ease-linear"
        style={{
          transform: `translateX(${scrollPosition}px)`, // Moves products left continuously
          whiteSpace: "nowrap", // Ensures single-line layout
          width: `${totalWidth * 2}px`, // Double the width for seamless scrolling
        }}
      >
        {products.map((product) => {
          const { id, featured, name, image, price } = product;
          const NairaAmount = formartPrice(price);
          if (featured) {
            return (
              <Link
                className="flex flex-col items-center mx-2"
                key={id}
                to={`/products/${id}`}
              >
                <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-full shadow-md"
                  />
                </div>
                <h3 className="mt-2 text-center text-gray-800 leading-tight tracking-tighter md:leading-normal md:tracking-normal">
                  {name}
                </h3>
                <p className="text-center text-rose-700">{NairaAmount}</p>
              </Link>
            );
          }
          return null;
        })}

        {/* Duplicate products for seamless scrolling */}
        {products.map((product) => {
          const { id, featured, name, image, price } = product;
          const NairaAmount = formartPrice(price);
          if (featured) {
            return (
              <Link
                className="flex flex-col items-center mx-2"
                key={`duplicate-${id}`}
                to={`products/${id}`}
              >
                <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-full shadow-md"
                  />
                </div>
                <h3 className="mt-2 text-center text-gray-800">{name}</h3>
                <p className="text-center text-rose-700">{NairaAmount}</p>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
