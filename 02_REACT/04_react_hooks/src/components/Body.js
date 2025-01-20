import RestaurantCard from "./RestaurantCard";
import restList from "../configs/mockData"
import {useState} from "react";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState(restList) // State Variable using useState() hook, returns array
    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick={
                    ()=>{
                    const filteredList = restaurantList.filter(rest => rest.data.avgRating >4);
                    setRestaurantList(filteredList)
                    }
                    }>Top Rated Restaurant</button>
            </div>
            <div className="rest-container"> 
                {
                restaurantList.map(restaurant => 
                <RestaurantCard key={restaurant.data.id} restData={restaurant}/>)
                }      
            </div>
        </div>
    );
    };

    export default Body;