import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exitingItem = state.find((item) => item.id === action.payload.id);
      if (exitingItem) {
        exitingItem.quantity += 1;
        exitingItem.totalPrice += action.payload.rate;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.rate,
        });
      }
    },
    removeCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
