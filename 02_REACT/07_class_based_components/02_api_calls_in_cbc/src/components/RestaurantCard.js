//Using Css inside JSX (Not a good practice)
const inlineCssBgColor = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (restObj) => {
    const {restData} = restObj;
    const {cloudinaryImageId, name, cuisines,costForTwo, avgRating, sla} = restData?.card?.card?.restaurant?.info;//? is called optional chaining
    const { deliveryTime } = sla;
    return (
        <div className="rest-card" style={inlineCssBgColor}>
            <img alt="res-logo" className="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} />
            <h3 className="rest-name"> {name}</h3>
            <p> {cuisines.join(" , ")}</p>
            <p> INR {costForTwo/100} COST FOR TWO</p>
            <p> {avgRating}</p>
            <p> Delivery Time: {deliveryTime} mnts</p>
        </div>
    );
};

export default RestaurantCard;