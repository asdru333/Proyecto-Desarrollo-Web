import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
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
            state.itemsCount -= action.payload.product.quantity;
            state.cart = state.cart.filter(item => {
                return item.product.id !== action.payload.product.product.id;
            });
        },
        emptyCar: (state) => {
            state.itemsCount = 0;
            state.cart = [];
        }
    }
});

export const { addItemToCart, removeItemFromCart, emptyCar } = cartSlice.actions;

export default cartSlice.reducer;
