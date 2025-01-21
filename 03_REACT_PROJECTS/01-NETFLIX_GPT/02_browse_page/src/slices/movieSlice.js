import { createSlice } from "@reduxjs/toolkit";

// Define a movie slice with initial state null and two reducers: setMovie and removeMovie.
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies :(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo :(state, action) => {
            state.trailerVideo = action.payload;
        },
        setMovie: (state, action) => {
            return action.payload;
        },
        removeMovie: (state) => {
            return null;
        },
    },

});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;
export default  movieSlice.reducer;