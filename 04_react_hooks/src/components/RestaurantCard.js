//Using Css inside JSX (Not a good practice)
const inlineCssBgColor = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (restObj) => {
    const {restData} = restObj;
    const {image, name, cuisines,costForTwo,avgRating,delivereyTime} = restData?.data;
    return (
        <div className="rest-card" style={inlineCssBgColor}>
            <img alt="res-logo" className="rest-logo" src={image} />
            <h3 className="rest-name"> {name}</h3>
            <p> {cuisines.join(" , ")}</p>
            <p> GBP {costForTwo} COST FOR TWO</p>
            <p> {avgRating}</p>
            <p> {delivereyTime}</p>
        </div>
    );
};

export default RestaurantCard;