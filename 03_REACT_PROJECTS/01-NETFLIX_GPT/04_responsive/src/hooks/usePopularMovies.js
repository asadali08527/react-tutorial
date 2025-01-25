import { useDispatch, useSelector } from 'react-redux';
import { POPULAR_MOVIES }  from "../constants/urlConstants";
import { API_OPTIONS } from '../constants/movieApis';
import { useEffect } from 'react';
import { addPopularMovies } from '../slices/movieSlice';
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=> store.movies.popularMovies);
    const getMovies = async () =>{
        const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
        const json = await data.json();
        // console.log("Popular Movies:"+ json.results);  // for testing purpose only, remove in production code
        dispatch(addPopularMovies(json.results));
  };
  useEffect(()=>{
    !popularMovies && getMovies();
  },[])
}

export default usePopularMovies;