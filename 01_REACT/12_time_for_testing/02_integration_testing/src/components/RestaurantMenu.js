import { useParams } from "react-router-dom";

import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null); // State variable to track the index of the expanded category.

    const { restaurantId } = useParams(); // Destructuring the restaurantId from the URL.
    
    const restInfo = useRestaurantMenu(restaurantId);    

    //console.log(restInfo); // Log the fetched restaurant information to the console for debugging.

    if (restInfo === null) return <Shimmer /> 

    const { name, cuisines, costForTwoMessage} = restInfo?.[2]?.card?.card?.info; // Destructuring to get the restaurant name for the heading.
    
    const { itemCards } = restInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card; // Destructuring to get the restaurant name for the heading.

    const categories = restInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); // Getting the category names from the menu.
    
    //console.log(categories)
    
    return  (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-4 p-2">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(" , ")} - {costForTwoMessage}</p>
            {categories.map((category, index)=>
                (<RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex && true} //showIndex ? true :false
                    setShowIndex={()=>setShowIndex(index)}
                    />))}
        </div>
    );
};

export default RestaurantMenu;