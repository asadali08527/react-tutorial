import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BACKGROUND_BANNER } from '../constants/urlConstants'

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
              <img className='h-screen object-cover' src={NETFLIX_BACKGROUND_BANNER} alt="Login" />
      </div>
      <div> 
        <GPTSearchBar />
       <GPTMovieSuggestions />
      </div>
    </>
  )
}

export default GPTSearch