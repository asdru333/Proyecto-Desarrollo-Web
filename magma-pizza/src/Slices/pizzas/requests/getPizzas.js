import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPizzas = createAsyncThunk('pizzas/getPizzas', async (params, { getState }) => {
    const pizzasFetch = await fetch('http://localhost:7500/pizzas');
    const pizzasData = await pizzasFetch.json();
    console.log("pizzasDate: ", pizzasData);
    if (pizzasData.status === 200) {
        return pizzasData;
    } else {
        return {
            error: true,
            message: pizzasData.error.message,
        }
    }
});

export const onGetPizzasFullfiled = (state, action) => {
    if (action.payload.error) {
        state.pizzas = null;
        state.errorMessage = action.payload.message;
    } else {
        state.pizzas = action.payload;
    }
};

export const onGetPizzasRejected = (state) => {
    state.pizzas = null;
}