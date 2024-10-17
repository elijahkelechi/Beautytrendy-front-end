import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Form } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import stripeLogo from "../assets/stripe2.svg";
import logo from "../assets/logo.png";
import formatPrice from "../utils";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [billingName, setBillingName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingCountry, setBillingCountry] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const {
    orderTotal,
    cartItems: items,
    tax,
    shipping: shippingFee,
  } = useSelector((state) => state.cartState);

  const createOrder = async (order) => {
    try {
      const response = await customFetch.post("/orders", order, {
        withCredentials: true,
      });

      toast.success("Order successful! Your product is on the way! 😇 ");
      dispatch(clearCart());
      return response;
    } catch (error) {
      toast.error("Failed to create order: " + error?.response?.msg);
      console.error("Error creating order:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      // Fetch the payment intent client secret from the backend
      const response = await customFetch.post(
        "/orders",
        {
          tax,
          shippingFee,
          formName: name, // Use name for order creation
          formEmail: email, // Use email for order creation
          formAddress: address, // Use address for order creation
          formCity: city, // Use city for order creation
          formState: state, // Use state for order creation
          formCountry: country, // Use country for order creation
          items,
        },
        { withCredentials: true }
      );

      const { clientSecret } = response.data;

      // Confirm the payment with Stripe using billing details
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: billingName, // Use billing name for payment
            email: billingEmail, // Use billing email for payment
            address: {
              line1: billingAddress, // Use billing address for payment
              city: billingCity, // Use billing city for payment
              state: billingState, // Use billing state for payment
              country: billingCountry, // Use billing country for payment
            },
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          toast.success("Payment successful!");

          // Create the order with the delivery address
          const order = {
            tax,
            shippingFee,
            formName: name, // Use name for order creation
            formEmail: email, // Use email for order creation
            formAddress: address, // Use address for order creation
            formCity: city, // Use city for order creation
            formState: state, // Use state for order creation
            formCountry: country, // Use country for order creation
            items,
          };
          await createOrder(order);
        }
      }
    } catch (error) {
      toast.error("Payment failed: " + error.message);
      console.error("Error during payment:", error);
    }
  };

  return (
    <div className="flex-col gap-y-0 border-b border-base-300 pb-6 overflow-x-hidden">
      <h1>Delivery Address</h1>
      <Form method="POST" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center my-2 gap-2">
          <span>Name</span>
          <input
            type="text"
            className="grow"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center my-2 gap-2">
          <span>Email</span>
          <input
            type="email"
            className="grow"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center my-2 gap-2">
          <span>Address</span>
          <input
            type="text"
            className="grow"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center my-2 gap-2">
          <span>City</span>
          <input
            type="text"
            className="grow"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center my-2 gap-2">
          <span>State</span>
          <input
            type="text"
            className="grow"
            placeholder="Enter your state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center my-2 gap-2">
          <span>Country</span>
          <input
            type="text"
            className="grow"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>

        {/* Billing Information */}
        <div className="border-2 border-primary-content shadow-sm shadow-primary-content px-4 py-6">
          <div className="flex place-items-center">
            <img src={stripeLogo} className="h-36 w-full" />
          </div>
          <h2 className="mt-6">
            Billing Information (
            <span className="text-rose-700 text-xl md:text-2xl animate-ping">
              Testing Mode
            </span>
            )
          </h2>

          <label className="input input-bordered flex items-center my-2 gap-2">
            <span>Name</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter billing name"
              value={billingName}
              onChange={(e) => setBillingName(e.target.value)}
              required
            />
          </label>

          <label className="input input-bordered flex items-center my-2 gap-2">
            <span>Email</span>
            <input
              type="email"
              className="grow"
              placeholder="Enter billing email"
              value={billingEmail}
              onChange={(e) => setBillingEmail(e.target.value)}
              required
            />
          </label>

          <label className="input input-bordered flex items-center my-2 gap-2">
            <span>Address</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter billing address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              required
            />
          </label>

          <label className="input input-bordered flex items-center my-2 gap-2">
            <span>City</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter billing city"
              value={billingCity}
              onChange={(e) => setBillingCity(e.target.value)}
              required
            />
          </label>

          <label className="input input-bordered flex items-center my-2 gap-2">
            <span>State</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter billing state"
              value={billingState}
              onChange={(e) => setBillingState(e.target.value)}
              required
            />
          </label>

          <label className="input input-bordered flex items-center my-2 gap-2">
            <span>Country</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter billing country"
              value={billingCountry}
              onChange={(e) => setBillingCountry(e.target.value)}
              required
            />
          </label>
          <div className="mt-4">
            <CardElement className="input input-bordered" />
          </div>
          <div className="mt-4 flex">
            <span className="font-semibold leading-tight text-xs md:text-sm">
              You are to pay:{" "}
            </span>
            <span className="font-extrabold">{formatPrice(orderTotal)}</span>
            <span className="text-xs flex ml-1">
              <span className="mr-1">to </span>
              <img src={logo} className="h-4 w-8 rounded-sm" />
              Beautytrendy
            </span>
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-primary-content hover:bg-blue-600 shadow-primary-content  text-gray-50 w-full mt-0"
          >
            Pay Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
