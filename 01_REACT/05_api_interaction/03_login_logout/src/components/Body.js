import RestaurantCard from "./RestaurantCard";
import restaurantData from "../configs/mockRestaurantData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState([]) // State Variable using useState() hook, returns array
    
    useEffect(()=>{
        fetchData();
    }, []); 

    const fetchData = async ()=>{
    
    //SUPPOSE WE WILL HIT BELOW API TO GET DATA FROM SERVER

    //const data = await fetch('https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Biryani&trackingId=e50f8c62-221b-3e81-2f9b-b691591dfbfe&submitAction=ENTER&queryUniqueId=5fd8e3b6-3534-e8d0-e843-404db7c11807');
    
    //const json = await data.json();

    //SET THE JSON DATA TO THE STATE VARIABLE

    setRestaurantList(restaurantData)// HERE WE ARE USING MOCK DATA
    
    };
   
    // Conditional Rendering, If no data is available, show a shimmer effect instead of loading spinner.
    if (!restaurantList.length) return <Shimmer />;

    return (!restaurantList.length) ? <Shimmer /> : (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick={
                    ()=>{
                    const filteredList = restaurantList.filter(rest => rest.card.card.restaurant.info.avgRating > 4);
                    setRestaurantList(filteredList)
                    }
                    }>Top Rated Restaurant</button>
            </div>
            <div className="rest-container"> 
                {
                restaurantList.map(rest => 
                <RestaurantCard key={rest.card.card.info.id} restData={rest}/>)
                }      
            </div>
        </div>
    );
    };

    export default Body;