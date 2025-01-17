//Using Css inside JSX (Not a good practice)

const RestaurantCard = (restObj) => {
    const {restData} = restObj;
    const {cloudinaryImageId, name, cuisines,costForTwo, avgRating, sla} = restData?.card?.card?.restaurant?.info;//? is called optional chaining
    const { deliveryTime } = sla;
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-green-300">
            <img alt="res-logo" className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg"> {name}</h3>
            <p> {cuisines.join(" , ")}</p>
            <p> INR {costForTwo/100} COST FOR TWO</p>
            <p> {avgRating}</p>
            <p> Delivery Time: {deliveryTime} mnts</p>
        </div>
    );
};

export default RestaurantCard;