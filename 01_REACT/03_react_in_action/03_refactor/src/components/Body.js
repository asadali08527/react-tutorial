import RestaurantCard from "./RestaurantCard";
import restList from "../configs/mockData"

const Body = () =>{
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="rest-container"> 
                {/* <RestaurantCard restData = {restObj[0]} />
                <RestaurantCard restData = {restObj[1]} />
                <RestaurantCard restData = {restObj[2]} /> */}
    
                {
                restList.map(restaurant => 
                <RestaurantCard key={restaurant.data.id} restData={restaurant}/>)
                }
    
                {/* BELOW ONE IS OK BUT STRICTLY NOT RECOMMENDED USING INDEX AS KEY, BAD PRACTICE
                {restObj.map((restaurant,index) => <RestaurantCard key={index} restData={restaurant}/>)} */}
            </div>
        </div>
    );
    };

    export default Body;