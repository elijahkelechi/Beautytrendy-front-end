import formatPrice from "../utils"; // Ensure you have a utility function to format the price
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ cartItem }) => {
  const { name, amount, brand, size, image, unit, price, cartId } = cartItem;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ cartId }));
  };

  const handleEdit = (newAmount) => {
    dispatch(editItem({ cartId, amount: newAmount }));
  };

  return (
    <div className="flex flex-col mb-6 gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6">
      <div className="flex-shrink-0 p-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md shadow-md"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{brand}</p>
          {size ? (
            <p className="text-sm text-gray-600">
              Size: {size} {unit}
            </p>
          ) : null}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm md:text-lg flex-col font-semibold  text-gray-800">
            {formatPrice(price * amount)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleEdit(amount - 1)}
              disabled={amount <= 1}
              className="bg-rose-600 text-white px-2 py-1 rounded disabled:opacity-50"
            >
              -
            </button>
            <span>{amount}</span>
            <button
              onClick={() => handleEdit(amount + 1)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              +
            </button>
            <button
              onClick={handleRemove}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
