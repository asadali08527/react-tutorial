import RestaurantCard from "./RestaurantCard";
import restaurantData from "../configs/mockRestaurantData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState([]) // State Variable using useState() hook, returns array
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        fetchData();
    }, []); 

    const fetchData = async ()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Biryani&trackingId=8372e22f-5733-01fb-2055-75e14851dcda&submitAction=ENTER&queryUniqueId=61fa22ce-918d-9eac-6ea9-001f7bb28fe3");
    
    const json = await data.json();
    // console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
    
    // SET THE JSON DATA TO THE STATE VARIABLE

    setRestaurantList(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
    
    };
   
    // Conditional Rendering, If no data is available, show a shimmer effect instead of loading spinner.
    if (!restaurantList.length) return <Shimmer />;

    return (!restaurantList.length) ? <Shimmer /> : (
        <div className="body">
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-box" value={searchTerm} onChange={(e) => {
                        setSearchTerm(e.target.value)
                        }} placeholder="Search for restaurants..." />
                    <button className="search-btn" onClick={()=>{
                       const searchedRestaurant =  restaurantList.filter(rest => {
                            return rest.card.card.restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase());
                    });
                    setFilteredRestaurantList(searchedRestaurant);
                        }}>Search</button>
                    </div>                
                    
                    <button className="filter-btn" onClick={
                    ()=>{
                    const filteredList = restaurantList.filter(rest => rest.card.card.restaurant.info.avgRating > 4);
                    setFilteredRestaurantList(filteredList);
                    }
                    }>Top Rated Restaurant</button>
            </div>
            <div className="rest-container"> 
                
                {
                filteredRestaurantList.length?
                    filteredRestaurantList.map(rest => 
                        <RestaurantCard key={rest.card.card.info.id} restData={rest}/>):
                    restaurantList.map(rest => 
                        <RestaurantCard key={rest.card.card.info.id} restData={rest}/>)
                }      
            </div>
        </div>
    );
    };

    export default Body;