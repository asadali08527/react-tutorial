import { createSlice } from "@reduxjs/toolkit";

// Define a movie slice with initial state null and two reducers: setMovie and removeMovie.
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        searchMovieResults: null,
        searchMovieNames: null,
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
        addSearchMovieResults: (state, action) => {
            state.searchMovieResults=action.payload;
        },
        addSearchMovieNames: (state, action) => {
            state.searchMovieNames=action.payload;
        },
        clearSearchMovieResults: (state) => {
            state.searchMovieResults=[];
        },
        ClearSearchMovieNames: (state) => {
            state.searchMovieNames=[];
        },
        
    },

});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addSearchMovieResults, addSearchMovieNames, clearSearchMovieResults, ClearSearchMovieNames } = movieSlice.actions;
export default  movieSlice.reducer;