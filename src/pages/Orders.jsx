import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { customFetch } from "../utils";
import formatPrice from "../utils";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const url = "/orders/currentUserOrders";
        const response = await customFetch(url, {
          withCredentials: true,
        });
        const myOrders = response.data;
        const { orders } = myOrders;
        console.log(orders);
        setOrders(orders);
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);
  if (orders.length < 1)
    return (
      <p className="capitalize absolute pt-32  align-elements px-2 grid md:grid-2 w-full">
        You have no active orders
        <Link to="/products" className="btn btn-primary text-white mt-4">
          Shop Now
        </Link>
      </p>
    );

  return (
    <div className="relative pt-28 md:pt-24 align-elements px-2 grid md:grid-2 w-full">
      <SectionTitle text="Your Orders" />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:w-full">
          {orders.map((order) => {
            const {
              orderItems,
              total,
              formAddress,
              formState,
              formCountry,
              createdAt,
            } = order;
            return (
              <div key={order._id} className="border p-4 rounded shadow-md">
                <h2 className="text-lg font-bold">
                  Order Total: {formatPrice(total)} USD
                </h2>

                <p className="text-sm">
                  {formAddress}, {formState}, {formCountry}
                </p>
                <p className="text-sm text-gray-500">
                  Ordered on: {new Date(createdAt).toLocaleDateString()}
                </p>
                <h3 className="mt-2 font-semibold">Order Items:</h3>
                <div className="flex flex-col space-y-2">
                  {orderItems.map((item) => {
                    const { image, name, amount, price } = item; // include amount if necessary
                    return (
                      <div key={item.product} className="flex items-center">
                        <img
                          src={image}
                          alt={name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="ml-4">
                          <h4 className="font-medium">{name}</h4>
                          <p className="text-sm">Quantity: {amount}</p>
                          <p>Price: {formatPrice(price)}</p>
                          <p>Payment: Received ✅</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
