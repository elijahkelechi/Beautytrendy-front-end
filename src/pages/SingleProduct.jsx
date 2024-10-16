import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/index";
import formatPrice from "../utils/index";
import { BsTagFill } from "react-icons/bs";
import { generateAmountOption } from "../utils/index";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProducts", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    const singleProduct = response.data.product;
    return singleProduct;
  };

const SingleProduct = () => {
  const product = useLoaderData();
  const {
    image,
    additionalImages,
    video,
    name,
    price,
    description,
    brand,
    category,
    sizes,
  } = product;

  // State to manage the main image
  const [mainImage, setMainImage] = useState(image);

  // State to manage selected size and price
  const [selectedPrice, setSelectedPrice] = useState(price);

  // State to manage selected amount
  const [amount, setAmount] = useState(1);

  // Format the initial base price
  const nairaAmount = formatPrice(selectedPrice);

  // Handle the size selection and update the price
  const handleSizeChange = (sizePrice) => {
    setSelectedPrice(sizePrice);
  };

  // Handle the amount selection
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const selectedSize = sizes.find((size) => size.price === selectedPrice); // Find the selected size object

  // Creating the product object for the cart
  const cartProduct = {
    cartId: product.id + selectedPrice, // Unique ID combining productId and price/size
    product: product.id,
    image,
    name,
    price: selectedPrice, // Price based on the selected size
    brand,
    size: selectedSize?.value, // Adding the size value (e.g., 'Large', '500g')
    unit: selectedSize?.unit, // Adding the unit (e.g., 'kg', 'L')
    amount, // Adding the selected amount
  };

  // Initialize dispatch from Redux
  const dispatch = useDispatch();

  // Dispatching the action to add the item to the cart
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct })); // Dispatch the addItem action
    window.scrollTo(0, 0);
  };

  const clearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative pt-24 px-4">
      {/* Breadcrumb Navigation */}
      <div className="mb-2 mt-6">
        <nav className="flex space-x-2 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>&gt;</span>
          <Link to="/products" className="text-blue-600 hover:underline">
            Products
          </Link>
          <span>&gt;</span>
          <span className="text-gray-500">{name}</span>
        </nav>
      </div>

      {/* Product Layout */}
      <div className="md:grid md:grid-cols-2 gap-8">
        {/* Left Section - Product Images */}
        <div className="space-y-2">
          {/* Main Image */}
          <div
            className="w-full h-80 bg-white shadow-md rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            onClick={() => setMainImage(image)} // Reset main image when clicked
          >
            <img
              src={mainImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-3 gap-2">
            {additionalImages.map((img, index) => (
              <div
                key={index}
                className="w-full h-24 bg-white shadow-md rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                onClick={() => setMainImage(img.url)} // Update main image on click
              >
                <img
                  src={img.url}
                  alt={`additional-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="space-y-2 md:pl-4">
          {/* Price */}
          <div className="flex items-center">
            <BsTagFill className="text-rose-600 mr-2" />
            <p className="text-3xl text-rose-600 font-bold">{nairaAmount}</p>
          </div>

          {/* Product Name */}
          <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>

          {/* Brand */}
          {brand && (
            <p className="text-lg text-gray-500">
              Brand:{" "}
              <span className="font-semibold text-gray-700">{brand}</span>
            </p>
          )}

          {/* Category */}
          {category && (
            <p className="text-lg text-gray-500">
              Category:{" "}
              <span className="font-semibold text-gray-700">{category}</span>
            </p>
          )}

          {/* Description */}
          <p className="text-gray-700">{description}</p>

          {/* Sizes with Radio Buttons */}
          {sizes && sizes.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold text-lg text-gray-700">
                Select Size:
              </p>
              {sizes.map((size, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`size-${index}`}
                    name="size"
                    value={size.price}
                    checked={selectedPrice === size.price} // Check if this size is selected
                    onChange={() => handleSizeChange(size.price)} // Update price on change
                  />
                  <label htmlFor={`size-${index}`} className="text-stone-800">
                    {size.value} {size.unit} - {formatPrice(size.price)}
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Amount Selection */}
          <div>
            <label className="label" htmlFor="amount">
              <p className="font-semibold text-lg text-gray-700">
                How many Do You need?
              </p>
            </label>
            <select
              id="amount"
              className="select select-secondary select-bordered select-md w-full"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOption(12)}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-2">
            <button
              onClick={addToCart}
              className="btn btn-md text-white btn-primary mx-2"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              onClick={addToCart}
              className="btn btn-md text-white btn-primary mx-2"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      {/* Product Video(s) */}
      {video && (
        <div className="mt-4">
          <p className="border-b border-base-300 font-semibold text-lg text-gray-700">
            Product video
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
            <div className="w-full h-80 pb-4 bg-white shadow-md rounded-md overflow-hidden">
              <video
                src={video}
                controls
                className="w-full h-full object-cover"
              ></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
