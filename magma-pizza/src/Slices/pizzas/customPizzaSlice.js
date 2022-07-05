import { createSlice } from "@reduxjs/toolkit";
import { userReducers } from "./reducers";
import { postCustomPizza, onPostCustomPizzaFullfiled, onPostCustomPizzaRejected } from "./requests/postCustomPizza";

const customPizzaSlice = createSlice({
    name: 'customPizza',
    initialState: {
        size: null,
        crust: null,
        sauce: null,
        cheese: null,
        meats: null,
        vegetables: null,
        extras: null,
        price: null
    },
    reducers: userReducers,
    extraReducers(builder) {
        builder
            .addCase(postCustomPizza.fulfilled, onPostCustomPizzaFullfiled)
            .addCase(postCustomPizza.rejected, onPostCustomPizzaRejected)
    }
});

export default customPizzaSlice.reducer;
