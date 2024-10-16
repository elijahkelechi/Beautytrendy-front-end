import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems); // Correct path
  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <CartItems
            key={item.cartId}
            cartItem={item} // Pass the entire item or specify properties as needed
          />
        );
      })}
    </div>
  );
};

export default CartItemList;
