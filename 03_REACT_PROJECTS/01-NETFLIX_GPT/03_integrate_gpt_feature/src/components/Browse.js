import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const search = useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>    
      <Header />
      {
      search ? <GPTSearchPage /> :
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
      }  
      
    </div>
  )
};

export default Browse