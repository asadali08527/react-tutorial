import {useDispatch, useSelector} from 'react-redux'
import { lang } from '../constants/languageConstants';
import { useRef } from 'react';
import openaiClient from '../utils/openai';
import { API_OPTIONS } from '../constants/movieApis';
import { SEARCH_MOVIE_URL } from '../constants/urlConstants';
import MovieCard from './MovieCard';
import { addSearchMovieResults, addSearchMovieNames } from '../slices/movieSlice';


const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const query = "Act as a movie recommendation system and suggest some movies for "+ searchText?.current?.value+ " Only Give me names of 5 top 5 movies, comma separated like the example result given here. Example Results: All the best, No entry, Golmal, Sholey, Dhol";
  const selectedLanguage = useSelector((store)=>store.language?.lang);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
      const chatCompletion = await openaiClient.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-4o',
      });
      const suggestedMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
      dispatch(addSearchMovieNames(suggestedMovies));
      const promiseArray = suggestedMovies.map((movie)=>searchMoview(movie));
      const movieTmdbResult = await Promise.all(promiseArray);
      dispatch(addSearchMovieResults(movieTmdbResult.map((movies)=>movies.results)));
  };
  const searchMoview = async (movie) => {
    const searchMovieUrl = SEARCH_MOVIE_URL.replace("movie_name", movie);
    const data = await fetch(searchMovieUrl, API_OPTIONS);
    return await data.json();

  };
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-red-700 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref = {searchText} 
                   className="p-4 m-4 col-span-9" 
                   type='text' 
                   placeholder={lang[selectedLanguage].gptSearcPlaceHolder} />
            <button className="py-2 m-4 px-4 bg-gray-500 rounded-lg text-white col-span-3" onClick={handleGptSearchClick}>{lang[selectedLanguage].search}</button>
        </form>
    </div>
  )
};

export default GPTSearchBar