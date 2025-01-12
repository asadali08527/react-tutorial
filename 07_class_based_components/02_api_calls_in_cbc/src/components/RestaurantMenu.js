import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../configs/constants";

const RestaurantMenu = () => {

    const { restaurantId } = useParams(); // Destructuring the restaurantId from the URL.

    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchRestInfo();
    }, []);

    

    const fetchRestInfo = async ()=>{
        const response = await fetch(MENU_API_URL+restaurantId);
        const json = await response.json();
        setRestInfo(json?.data?.cards); // Set the fetched restaurant information to the state variable.
    };
    console.log(restInfo); // Log the fetched restaurant information to the console for debugging.

    if (restInfo === null) return <Shimmer /> 

    const { name, cuisines, costForTwoMessage} = restInfo?.[2]?.card?.card?.info; // Destructuring to get the restaurant name for the heading.
    
    const { itemCards } = restInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card; // Destructuring to get the restaurant name for the heading.

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>  // Returning a list of menu items.  // items.id and items.name are destructured from the itemCards array.  // key prop is used for React to track which items are changing.  // Using the id to create unique keys.  // Items.name is the menu item name.  // items.id is the unique identifier for each menu item.  // This approach is more efficient and avoids potential issues with re-rendering of menu items.  // We're using map() function to iterate over the itemCards array and return a list of menu items.  // The returned list is then rendered in the menu component.  // The key prop ensures that React can track which items are changing, which helps with performance.  // This approach is more efficient and avoids potential issues with re-rendering of menu items.  // We're using map() function to iterate over the
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;