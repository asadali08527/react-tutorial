import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    
    if (!movies || movies.length === 0) return <div>Loading...</div>;

    const mainMovie = movies[0]; 
    const { id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-5">
        <VideoTitle mainMovie={mainMovie} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer