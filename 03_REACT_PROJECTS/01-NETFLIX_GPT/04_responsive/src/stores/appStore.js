import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import moviesReducer from '../slices/movieSlice';
import gptReducer from '../slices/gptSlice'; 
import languageReducer from '../slices/languageSlice';


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer, 
        language: languageReducer,

    },
    //devTools: process.env.NODE_ENV!== 'production', // Enable Redux DevTools in development mode only.

});

export default appStore;