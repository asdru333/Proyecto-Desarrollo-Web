import { createAsyncThunk } from "@reduxjs/toolkit";

export const postOrder = createAsyncThunk('usuarios/postOrder', async (credentials) => {
    const orderFetch = await fetch('http://localhost:7500/orders/create-order', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: credentials.username,
            items: credentials.items,
            cost: credentials.cost,
            pickup: credentials.pickup,
            address: credentials.address
        }),
    });
    const orderData = await orderFetch.json();
    if (orderFetch.status === 200) {
        return orderData;
    } else {
        return {
            error: true,
            message: orderData.error.message,
        }
    }
});

export const onPostOrderFullfiled = (state, action) => {
    if (action.payload.error) {
    
    } else {
    
    }
};

export const onPostOrderRejected = (state) => {
    
}