import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/users/userSlice";

const reducers = combineReducers({
    user: userSlice,
})

const store = configureStore({
    reducer: reducers,
});

export default store;
