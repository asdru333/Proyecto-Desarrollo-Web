import { createAsyncThunk } from "@reduxjs/toolkit";

export const postCustomPizza = createAsyncThunk('usuarios/postCustomPizza', async (credentials) => {
    const customPizzaFetch = await fetch('http://localhost:7500/', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.username,
            password: credentials.password,
        }),
    });
    const userData = await customPizzaFetch.json();
    if (customPizzaFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const onPostCustomPizzaFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    } else {
      /*
        Mixpanel.identify(action.payload.id);
            Mixpanel.people.set({
            $name: action.payload.name,
            $email: action.payload.email,
            
        });
        */
        state.userIsLoggedIn = true;
        state.user = action.payload;
    }
};

export const onPostCustomPizzaRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}