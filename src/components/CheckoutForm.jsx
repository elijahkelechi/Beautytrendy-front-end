import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import { Form, Navigate, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const {
    orderTotal,
    cartItems: items,
    tax,
    shipping: shippingFee,
  } = useSelector((state) => state.cartState);
  console.log(items);

  const publicKey = "pk_test_e407d5002487988096a0c828656128458ea49fcd";
  const isUserAuthenticated = () => {
    return document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("myToken="));
  };
  const createOrder = async (order) => {
    try {
      const response = await customFetch.post("/orders", order, {
        withCredentials: true,
      });

      toast.success("Order successful, Your product is on the way! 😇 ");
      dispatch(clearCart());
      return response;
    } catch (error) {
      toast.error("Failed to create order: " + error?.response?.msg);
      console.error("Error creating order:", error);
    }
  };

  // Handle successful payment
  const handlePaymentSuccess = async (response) => {
    toast.success(`Payment Successful! Reference: ${response.reference}`);

    const order = {
      tax,
      shippingFee,
      formName: name,
      formEmail: email,
      formAddress: address,
      formCity: city,
      formState: state,
      formCountry: country,
      items,
    };

    // Log the order to check its contents
    console.log("Order being created:", order);

    // Call the action function
    await createOrder(order); // No token needed, cookie will be used
  };

  const paystackConfig = {
    email,
    amount: orderTotal,
    publicKey,
    text: "Proceed to Payment",
    onSuccess: handlePaymentSuccess,
    onClose: () => {
      toast.error("Payment process was interrupted.");
    },
  };

  if (!isUserAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex-col gap-y-0 border-b border-base-300 pb-6 overflow-x-hidden">
      <h1>Pls enter correctly, to be used to deliver your product!</h1>
      <Form method="POST" onSubmit={(e) => e.preventDefault()}>
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

        <label className="input input-bordered flex items-center  my-2 gap-2">
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

        <label className="input input-bordered flex items-center  my-2 gap-2">
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

        <label className="input input-bordered flex items-center  my-2 gap-2">
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

        <label className="input input-bordered flex items-center  my-2 gap-2">
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

        <div className="mt-4">
          <PaystackButton
            {...paystackConfig}
            className="btn btn-primary text-white w-full"
          />
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
