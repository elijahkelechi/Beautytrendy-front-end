import { Link, redirect } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutTotal from "../components/CheckoutTotal";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

// since the user can not be accessed by direct user State then I go with store
export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You are not logged in");
    return redirect("/login"); // You need to return the redirect function
  }

  return null;
};
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  console.log(cartTotal);
  if (cartTotal === 0) {
    return (
      <div className="relative pt-24 px-2 text-2xl overflow-x-hidden">
        <SectionTitle text="Your cart is empty 'pls add your favorite items'" />
        <div className="flex ">
          <Link to="/products" className="btn btn-primary text-white mt-4 mx-2">
            Add products
          </Link>
          <Link
            to="/orders"
            className="btn btn-primary animate-pulse text-white mt-4 mx-2"
          >
            <span className="animate-bounce mr-2">View Active Orders</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute  mt-2 mb-4 md:mt-2 align-elements px-2 justify-center place-content-center w-full scroll-px-0">
      <div className="absolute mt-28 md:mt-24 px-4 md:px-16 flex flex-col min-h-screen w-full">
        <SectionTitle text="Checkout Page" />
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-6 mt-8 flex-grow overflow-x-hidden scroll-mx-0">
          {/* Left Column (Cart Items) */}
          <div className="md:col-span-8">
            <CheckoutForm />
          </div>

          {/* Right Column (Cart Total and Checkout) */}
          <div className="md:col-span-4 md:ml-6 mb-4 flex flex-col justify-between relative">
            <div className="flex  justify-center">
              {/* Cart Total Card */}
              <CheckoutTotal />
            </div>

            {/* Proceed to checkout button fixed below CartTotal on medium screens */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
