import { useState} from 'react';
const VideoTitle = ({mainMovie}) => {
    const {original_title, overview, vote_average, popularity, release_date} = mainMovie;
    const [moreInfo, setMoreInfo] = useState(false);
    const handleMoreInfoClick = () => {
        // fetch more details and display
        setMoreInfo(!moreInfo)
    }

  return (
    <div className='pt-28 px-6 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <br/>
        <h1 className='text-2xl md:text-6xl font-bold'>{original_title}</h1><br />
        <p className="hidden md:inline-block py-6 text-lg w-1/4 justify-evenly"> {overview}</p>
        
        <div>
            <button className='bg-white text-black p-4 px-5 md:px-10 py-1 md:py-2 w-100 text-lg fa-solid fa-play rounded-lg hover:opacity-80'>
                <svg className="w-5 h-5 mx-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"/>
                </svg>
                Play
            </button>
            
            <button onClick={handleMoreInfoClick} className='hidden md:inline-block bg-gray-500 text-white mx-4 my-8 pt-6 pb-2 px-4 py-2 w-[134px] text-lg rounded-lg bg-opacity-50 text-center'>
                
                More Info
             </button>
        </div>
        {moreInfo && (
        <div className="ml-52">
          <p>Rating: {vote_average}</p>
          <p>Popularity: {popularity}</p>
          <p>Release Date: {release_date}</p>
        </div>
      )}
    </div>
  )
}

export default VideoTitle