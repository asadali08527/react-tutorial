

import {useEffect} from 'react'
import { MOVIE_URL } from '../constants/urlConstants'
import { API_OPTIONS } from '../constants/movieApis'
import { useDispatch, useSelector } from'react-redux'
import { addTrailerVideo } from '../slices/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
    const movie_url = MOVIE_URL.replace("{movie_id}", movieId);
    const movieDetails = async()=>{
        const data = await fetch(movie_url, API_OPTIONS)
        const json = await data.json();
        const trailer = json.results.filter(result=>result.type==="Trailer")[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
       !trailerVideo && movieDetails();
    },[]) ; 
}

export default useMovieTrailer;