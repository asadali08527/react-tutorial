import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";
const SecondaryContainer = () => {
  const moviesList = useSelector((store)=>store.movies);
  return (
    moviesList && (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl:4 relative z-20 md:pl-6">
        <MovieList title={"Now Playing"} movies={moviesList?.nowPlayingMovies}/>
        moviesList?.popularMovies && (<MovieList title={"Popular Movies"} movies={moviesList?.popularMovies}/>)
        <MovieList title={"Sci-fi"} movies={moviesList?.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer