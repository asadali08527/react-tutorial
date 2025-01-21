import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import moviesReducer from '../slices/movieSlice';


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
    //devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in development mode only.

});

export default appStore;