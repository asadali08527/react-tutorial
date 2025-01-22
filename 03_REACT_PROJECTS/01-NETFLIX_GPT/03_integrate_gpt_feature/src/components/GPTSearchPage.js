import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BACKGROUND_BANNER } from '../constants/urlConstants'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
              <img src={NETFLIX_BACKGROUND_BANNER} alt="Login" />
            </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch