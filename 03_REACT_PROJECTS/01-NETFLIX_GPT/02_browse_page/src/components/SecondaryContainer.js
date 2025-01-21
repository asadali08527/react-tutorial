import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
const SecondaryContainer = () => {
  const moviesList = useSelector((store)=>store.movies);
  return (
    moviesList && (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-6">
        <MovieList title={"Now Playing"} movies={moviesList?.nowPlayingMovies}/>
        moviesList?.popularMovies && (<MovieList title={"Popular Movies"} movies={moviesList?.popularMovies}/>)
        <MovieList title={"Sci-fi"} movies={moviesList?.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer