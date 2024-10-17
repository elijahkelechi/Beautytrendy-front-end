import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { customFetch } from "../utils";
import formatPrice from "../utils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UsersOrders = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const admin = user?.role === "admin";

  useEffect(() => {
    if (!admin) {
      toast.error("Forbidden route");
      navigate("/"); // Redirect to the home page if not an admin
    }
  }, [admin, navigate]);

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const url = "/orders";
        const response = await customFetch(url, {
          withCredentials: true,
        });
        const usersOrders = response.data;
        const { orders } = usersOrders;
        setOrders(orders);
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="relative pt-28 md:pt-24 px-2 grid w-full">
      <SectionTitle text="Customers Orders" />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orders.length > 0 ? (
            orders.map((order, index) => {
              const {
                orderItems,
                total,
                formAddress,
                formName,
                formState,
                formCountry,
                createdAt,
              } = order;
              return (
                <div
                  key={`${order._id}-${index}`} // Use a combination of order ID and index
                  className="border p-4 rounded-lg shadow-lg bg-white"
                >
                  <h2 className="text-xl font-bold mb-2">
                    Order Total: {formatPrice(total)} USD
                  </h2>
                  <p className="font-semibold">Customer Name: {formName}</p>
                  <p className="text-sm text-gray-700">
                    To be delivered at: {formAddress}, {formState},{" "}
                    {formCountry}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered on: {new Date(createdAt).toLocaleDateString()}
                  </p>
                  <h3 className="mt-2 font-semibold">Order Items:</h3>
                  <div className="flex flex-col space-y-2">
                    {orderItems.map((item, index) => {
                      const { image, name, amount, price } = item;
                      return (
                        <div
                          key={`${item.product}-${index}`} // Ensure item.product is unique as well
                          className="flex items-center border-b py-2"
                        >
                          <img
                            src={image}
                            alt={name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="ml-4 flex-grow">
                            <h4 className="font-medium">{name}</h4>
                            <p className="text-sm">Quantity: {amount}</p>
                            <p>Price: {formatPrice(price)}</p>
                            <p className="text-green-600">
                              Payment: Received ✅
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No orders available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersOrders;
