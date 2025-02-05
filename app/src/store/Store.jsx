import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Slices/productsSlice.jsx";
import cartSlice from "../Slices/cartSlice.jsx";
import authSlice from "../Slices/authSlice.jsx";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    auth: authSlice,
  },
});
export default store;
