import RestaurantCard from "./RestaurantCard";
import PromotedRestaurantCard from "./PromotedRestaurantCard";
import restaurantData from "../configs/mockRestaurantData";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState([]) // State Variable using useState() hook, returns array
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const { setUsername, loggedInUser } = useContext(UserContext);
    const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);

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
   
    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) return <h1>Looks Like You are Offline, Please check Internet Connectivity</h1>

    // Conditional Rendering, If no data is available, show a shimmer effect instead of loading spinner.
    if (!restaurantList.length) return <Shimmer />;

    return (!restaurantList.length) ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex"> 
                <div className="search m-4 p-4">
                    <input 
                        type="text"
                        data-testid="search-input" 
                        className="border border-solid border-black " 
                        value={searchTerm} 
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }} placeholder="Search for restaurants..." />
                    <button className="px-4 py-1 bg-blue-100 m-4 rounded-lg" onClick={()=>{
                       const searchedRestaurant =  restaurantList.filter(rest => {
                            return rest.card.card.restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase());
                    });
                    setFilteredRestaurantList(searchedRestaurant);
                        }}>Search</button>
                </div>                
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-1 bg-green-100 rounded-lg" onClick={
                    ()=>{
                    const filteredList = restaurantList.filter(rest => rest.card.card.restaurant.info.avgRating > 4);
                    setFilteredRestaurantList(filteredList);
                    }
                    }>Top Rated Restaurant</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label> User : </label>
                    <input className="border border-black p-1" value = {loggedInUser} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap"> 
                
                {
                filteredRestaurantList.length?
                    filteredRestaurantList.map(rest => 
                        <RestaurantCard key={rest.card.card.info.id} restData={rest}/>):
                    restaurantList.map(rest => 
                       <Link key={rest.card.card.info.id} to={"/restaurants/"+rest.card.card.restaurant.info.id}> 
                       {rest.card.card.restaurant.info.promoted ? <RestaurantCardPromoted restData={rest}/>:<RestaurantCard  restData={rest}/>}
                       </Link>
                       )
                }      
            </div>
        </div>
    );
    };

    export default Body;