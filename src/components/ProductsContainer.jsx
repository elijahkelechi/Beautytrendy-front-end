import { useState } from "react";
import MainProduct from "./MainProducts";
import ProductList from "./ProductList";
import { BsGridFill, BsList, BsArrowUp } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import PaginationContainer from "./PaginationContainer";

const ProductsContainer = () => {
  const { totalProducts } = useLoaderData();
  // const { totalPages } = useLoaderData();
  // const { currentPage } = useLoaderData();
  // const { hasMore } = useLoaderData;
  // console.log(currentPage);
  const [isGridView, setIsGridView] = useState(true);

  const gridHandler = () => {
    setIsGridView(true);
  };

  const listHandler = () => {
    setIsGridView(false);
  };

  return (
    <div>
      <div className="absolute mt-10 px-2 md:px-8">
        <nav className="flex space-x-2 text-sm md:text-lg">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>&gt;</span>
          <Link to="/cart" className="text-blue-600 hover:underline">
            Cart
          </Link>
          <span>&gt;</span>
          <span className="text-gray-500">{name}</span>
        </nav>
      </div>
      <div className="flex w-full justify-end items-center space-x-4 px-4 py-2">
        <p className="text-gray-700 font-bold">View:</p>
        <BsGridFill
          onClick={gridHandler}
          className={`text-2xl cursor-pointer transition-colors duration-200 ${
            isGridView ? "text-primary " : "text-gray-500"
          } hover:text-rose-500`}
        />
        <BsList
          onClick={listHandler}
          className={`text-3xl font-bold cursor-pointer transition-colors duration-200 ${
            !isGridView ? "text-primary" : "text-gray-500"
          } hover:text-rose-500`}
        />
      </div>
      {totalProducts === 0 ? (
        <div className="capitalize text-center px-8">
          <h1 className="flex mt-24 mb-6 capitalize text-center px-8">
            No match found pls search more...
          </h1>
          <Link
            to="/products"
            className="btn btn-primary text-white animate-bounce"
          >
            Back to products
          </Link>
        </div>
      ) : (
        <div>
          {isGridView ? (
            <div className="pt-4 md:pt-0">
              <MainProduct />
            </div>
          ) : (
            <div className="pt-4 md:pt-0">
              <ProductList />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
