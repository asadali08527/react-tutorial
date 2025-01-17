import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
const cartStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    //devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in development mode only.

});

export default cartStore;