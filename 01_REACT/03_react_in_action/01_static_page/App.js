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
const RestaurantCard = () => {
    return (
        <div className="rest-card" style={inlineCssBgColor}>
            <img alt="res-logo" className="rest-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdQWcdUQREjgvXjsAw6n1yGZEKkc9NsocNQ&s" />
            <h3 className="rest-name"> Flaming Hut</h3>
            <p> Burger, Pizza</p>
            <p> Rating: 4.4 stars</p>
            <p> Delivery Time: 30 mnt</p>
        </div>

    );
}
const Body = () =>{
return (
    <div className="body">
        <div className="search"> Search </div>
        <div className="rest-container"> 
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />

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

