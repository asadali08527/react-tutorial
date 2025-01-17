import RestaurantCard from "./RestaurantCard";
// Take input as RestaurantCard and return a component for promoted restaurant card.(Higher Order Component example)
const PromotedRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/> {/* Pass RestaurantCard component as prop */}
            </div>
        );
    };
};

export default PromotedRestaurantCard;