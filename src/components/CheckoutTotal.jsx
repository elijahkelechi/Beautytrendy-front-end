import { useSelector } from "react-redux";
import formatPrice from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CheckoutTotal = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  const dispatch = useDispatch();
  const clearCartFunc = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="md:fixed md:top-32 md:right-4 z-50">
        {/* <button
          onClick={clearCartFunc}
          className="btn btn-primary text-white mb-2"
        >
          Clear Cart
        </button> */}
      </div>
      <div className="card bg-neutral md:mt-52  md:bottom-16  z-50 w-72">
        <div className="card-body w-full">
          <p className="flex justify-between text-gray-700 pb-2 border-b border-base-300 ">
            <span className="text-gray-800 font-bold pr-2">Subtotal:</span>
            <span>{formatPrice(cartTotal)}</span>
          </p>

          <p className="flex justify-between text-gray-700 pb-2 border-b border-base-300 ">
            <span className="text-gray-800 font-bold pr-2">Delivery Fee:</span>
            <span>{formatPrice(shipping)}</span>
          </p>
          <p className="flex justify-between text-gray-700 pb-2 border-b border-base-300 ">
            <span className="text-gray-800 font-bold pr-2">Tax:</span>
            <span>{formatPrice(tax)}</span>
          </p>
          <p className="flex justify-between text-gray-700 pb-2 mt-4 ">
            <span className="text-gray-800 font-bold pr-2 text-xl ">
              Ordertotal:
            </span>
            <span className="font-semibold">{formatPrice(orderTotal)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
