import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {searchMovieResults, searchMovieNames} = useSelector((store)=>store.movies);
  if (!searchMovieResults) return null;
  return (
    <div className='p-12 m-12 bg-black text-white bg-opacity-75'>
        {searchMovieResults &&
        searchMovieResults.length > 0 &&
        searchMovieNames.map((movieNames, index) =>
            <MovieList key={movieNames} title={movieNames} movies={searchMovieResults[index]} />
        )}
    </div>
  )
}

export default GPTMovieSuggestions