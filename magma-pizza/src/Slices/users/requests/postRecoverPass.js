import { createAsyncThunk } from "@reduxjs/toolkit";

export const postRecoverPass = createAsyncThunk('usuarios/postRecoverPass', async (credentials) => {
    const recoverFetch = await fetch('http://localhost:7500/users/recover-password', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.username,
        }),
    });
    const userData = await recoverFetch.json();
    if (recoverFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const onPostRecoverPassFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    } else {
        //state.userIsLoggedIn = true;
        //state.user = action.payload;
        console.log("rec pass fullfilled");
    }
};

export const onPostRecoverPassRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}