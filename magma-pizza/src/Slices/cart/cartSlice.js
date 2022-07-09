import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsCount: 0,
    totalCost: 0,
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload.product);
      state.itemsCount++;
      state.cart.push(action.payload.product);
      let int = parseInt(action.payload.product.price);
      state.totalCost += int;
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.name !== action.payload.product.name;
      });
      state.totalCost -= action.payload.product.price;
      state.itemsCount = 0;
    },
    emptyCar: (state) => {
      state.itemsCount = 0;
      state.cart = [];
      state.totalCost = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, emptyCar } =
  cartSlice.actions;

export default cartSlice.reducer;
