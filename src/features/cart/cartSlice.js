import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,

  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === product.cartId); // Ensure cartId is consistent

      if (item) {
        item.amount += product.amount; // Increment amount if item already exists
      } else {
        state.cartItems.push(product); // Add new product
      }

      state.numItemsInCart += product.amount; // Update the number of items in cart
      state.cartTotal += product.price * product.amount; // Update the total price
      cartSlice.caseReducers.calculateTotals(state); // Recalculate totals
      localStorage.setItem("cart", JSON.stringify(state)); // Update local storage
      toast.success("Successfully added to cart!");
    },
    calculateTotals: (state) => {
      state.tax = 0 * state.cartTotal; // Example tax calculation
      state.orderTotal = state.cartTotal + state.shipping + state.tax; // Update total
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState)); // Clear local storage
      return defaultState; // Reset state
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload; // Ensure consistent naming
      const product = state.cartItems.find((i) => i.cartId === cartId);

      if (product) {
        state.cartItems = state.cartItems.filter((i) => i.cartId !== cartId);
        state.numItemsInCart -= product.amount; // Decrease item count
        state.cartTotal -= product.price * product.amount; // Decrease total price
        cartSlice.caseReducers.calculateTotals(state); // Recalculate totals
        localStorage.setItem("cart", JSON.stringify(state)); // Update local storage
        toast.success("Item removed successfully!");
      }
    },
    editItem: (state, action) => {
      const { cartId, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === cartId); // Ensure consistent naming

      if (item) {
        state.numItemsInCart += amount - item.amount; // Adjust total item count
        state.cartTotal += item.price * (amount - item.amount); // Adjust total price
        item.amount = amount; // Update item amount
        cartSlice.caseReducers.calculateTotals(state); // Recalculate totals
        localStorage.setItem("cart", JSON.stringify(state)); // Update local storage
        toast.success("Cart updated!");
      }
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
