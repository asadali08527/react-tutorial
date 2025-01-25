import { useDispatch, useSelector } from 'react-redux';
import { NOW_PLAYING_MOVIE_URL}  from "../constants/urlConstants";
import { API_OPTIONS } from '../constants/movieApis';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../slices/movieSlice';
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies);
    const getNowPlayingMovies = async () =>{
        const data = await fetch(NOW_PLAYING_MOVIE_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(()=>{
    if(!nowPlayingMovies){
      getNowPlayingMovies();
    }
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;