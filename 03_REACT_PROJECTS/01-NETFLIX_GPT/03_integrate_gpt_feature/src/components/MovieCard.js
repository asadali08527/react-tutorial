import React from 'react'
import { MOVIE_IMAGE_URL } from '../constants/urlConstants'

const MovieCard = ({movieImage}) => {
  if(!movieImage) return null;
  return (
    <div className='w-48 pr-4'>
        <img alt="Movie Poster" src = {MOVIE_IMAGE_URL+movieImage} />
    </div>
  )
}

export default MovieCard