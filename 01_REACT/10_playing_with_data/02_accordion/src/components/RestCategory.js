import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) => {
    //console.log(data)
    const [showItems, setShowItems] = useState(false); // State variable to track if the accordion is expanded or not.
    const handleClick = () => {
        setShowItems(!showItems); // Toggle the expanded state when the header is clicked.
    };
    return (
        <div>
          {/** Header */}
          {/** Accordion Body */}   
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>            
                <span className="font-bold text-lg">{data.title}   ({data.itemCards.length}) </span>
                <span>+</span> {/* Add expand symbol here.  */} 
            </div>
            {showItems && data.itemCards.map(item => (<ItemList key={item.card.info.id}  item={item.card.info}/>))}
          </div> 
        </div>
    );
}
export default RestaurantCategory;