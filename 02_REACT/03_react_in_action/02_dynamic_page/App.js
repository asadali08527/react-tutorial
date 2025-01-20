import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Containers
 *      - Restaurant Cards
 *          - Name of the Restaurant
 *          - Image
 *          - Ratings
 *          - Cousine
 *          - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contacts
 */

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart-logo" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"/></li>
                </ul>
            </div>
        </div>
    );
};

//Using Css inside JSX (Not a good practice)
const inlineCssBgColor = {
    backgroundColor: "#f0f0f0"
}

// const RestaurantCard = (props) => {
//     return (
//         <div className="rest-card" style={inlineCssBgColor}>
//             <img alt="res-logo" className="rest-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdQWcdUQREjgvXjsAw6n1yGZEKkc9NsocNQ&s" />
//             <h3 className="rest-name"> {props.restName}</h3>
//             <p> {props.cusines}</p>
//             <p> {props.ratings}</p>
//             <p> {props.deliveryTime}</p>
//         </div>

//     );
// }

// OR

// const RestaurantCard = (restName, cusines,ratings, deliveryTime) => {
//     return (
//         <div className="rest-card" style={inlineCssBgColor}>
//             <img alt="res-logo" className="rest-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdQWcdUQREjgvXjsAw6n1yGZEKkc9NsocNQ&s" />
//             <h3 className="rest-name"> {restName}</h3>
//             <p> {cusines}</p>
//             <p> {ratings}</p>
//             <p> {deliveryTime}</p>
//         </div>
//     );
// }

// OR

// const RestaurantCard = (restObj) => {
//     const {restData} = restObj
//     return (
//         <div className="rest-card" style={inlineCssBgColor}>
//             <img alt="res-logo" className="rest-logo" src={restData.data.image} />
//             <h3 className="rest-name"> {restData.data.name}</h3>
//             <p> {restData.data.cuisines.join(" , ")}</p>
//             <p> GBP {restData.data.costForTwo} COST FOR TWO</p>
//             <p> {restData.data.avgRating}</p>
//             <p> {restData.data.delivereyTime}</p>
//         </div>
//     );
// }

//OR

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
}
const restObj = [
    {
        data:{
            id: "897jdwg89gw",
            name: "Flaming Hut",
            cuisines:["Burger", "Biryani", "Pizza", "Steak", "Snacks"],
            costForTwo: 15,
            delivereyTime: 30,
            avgRating: 4.3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdQWcdUQREjgvXjsAw6n1yGZEKkc9NsocNQ&s"
        }
    },
    {
        data:{
            id: "hg897jdwg89gw",
            name: "Lahori Chaska",
            cuisines:["Burger", "Biryani", "Pizza", "Steak", "Snacks"],
            costForTwo: 15,
            delivereyTime: 30,
            avgRating: 4.3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdQWcdUQREjgvXjsAw6n1yGZEKkc9NsocNQ&s"
        }
    },
    {
        data:{
            id: "90897jdwg89gw",
            name: "Chai Wala",
            cuisines:["Burger", "Biryani", "Pizza", "Steak", "Snacks"],
            costForTwo: 15,
            delivereyTime: 30,
            avgRating: 4.3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdQWcdUQREjgvXjsAw6n1yGZEKkc9NsocNQ&s"
        }
    }
]

const Body = () =>{
return (
    <div className="body">
        <div className="search"> Search </div>
        <div className="rest-container"> 
            {/* <RestaurantCard restData = {restObj[0]} />
            <RestaurantCard restData = {restObj[1]} />
            <RestaurantCard restData = {restObj[2]} /> */}


            {
            restObj.map(restaurant => 
            <RestaurantCard key={restaurant.data.id} restData={restaurant}/>)
            }

            {/* BELOW ONE IS OK BUT STRICTLY NOT RECOMMENDED USING INDEX AS KEY, BAD PRACTICE
            {restObj.map((restaurant,index) => <RestaurantCard key={index} restData={restaurant}/>)} */}
        </div>
    </div>
);
};
const AppLayout = () =>{
    return (
        <div className="app"> 
        <Header />
        <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

