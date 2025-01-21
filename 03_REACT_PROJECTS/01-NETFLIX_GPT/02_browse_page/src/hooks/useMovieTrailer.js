

import {useEffect} from 'react'
import { MOVIE_URL } from '../constants/urlConstants'
import { API_OPTIONS } from '../constants/movieApis'
import { useDispatch } from'react-redux'
import { addTrailerVideo } from '../slices/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movie_url = MOVIE_URL.replace("{movie_id}", movieId);
    const movieDetails = async()=>{
        const data = await fetch(movie_url, API_OPTIONS)
        const json = await data.json();
        const trailer = json.results.filter(result=>result.type==="Trailer")[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        movieDetails();
    },[]) ; 
}

export default useMovieTrailer;