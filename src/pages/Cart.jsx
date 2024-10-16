import CartTotal from "../components/CartTotal";
import CartItemList from "../components/CartItemList";
import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numOfItemsInCart = useSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (!numOfItemsInCart) {
    return (
      <div className="absolute mt-32">
        <SectionTitle text="No item in cart" />
        <Link to="/products" className="btn btn-primary text-white m-2">
          Add products
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pt-28 mb-4 md:pt-24 px-4 md:px-16 flex flex-col min-h-screen w-full">
      <SectionTitle text="Shopping Cart" />
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-6 mt-8 flex-grow">
        {/* Left Column (Cart Items) */}
        <div className="md:col-span-9">
          <CartItemList />
        </div>

        {/* Right Column (Cart Total and Checkout) */}
        <div className="md:col-span-3 flex flex-col justify-between relative">
          <div className="flex flex-col justify-between">
            {/* Cart Total Card */}
            <CartTotal />
            <div className="mt-3 w-full md:fixed md:bottom-2 md:right-4 md:w-[265px]">
              {user ? (
                <Link
                  className="btn btn-primary text-white w-full"
                  to="/checkout"
                >
                  Proceed to checkout
                </Link>
              ) : (
                <Link className="btn btn-primary text-white w-full" to="/login">
                  Please Login
                </Link>
              )}
            </div>
          </div>

          {/* Proceed to checkout button fixed below CartTotal on medium screens */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
