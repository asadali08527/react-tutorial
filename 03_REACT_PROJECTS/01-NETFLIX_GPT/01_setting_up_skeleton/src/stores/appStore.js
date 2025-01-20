import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';


const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
    //devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in development mode only.

});

export default appStore;