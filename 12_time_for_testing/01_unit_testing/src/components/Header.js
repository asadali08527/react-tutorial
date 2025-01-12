import { Link } from "react-router-dom";
import { logoUrl } from "../configs/constants";
import { cartImage } from "../configs/constants";
import { useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useSelector } from'react-redux';

const Header = () =>{
    //Subscribe to the store using a selector from the cart store
    const cart = useSelector(state => state.cart.items);

    const contextData = useContext(UserContext);  
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const handleClick = () => {
        btnName === "Login"? setBtnName("Logout"): setBtnName("Login");  // toggling the button text between "Login" and "Logout";
    };
    return(
        <div className="flex justify-between bg-pink-50 shadow-lg m-4">
            <div className="logo-container">
                <img className="w-32" src= {logoUrl} />
            </div>
            <div className="flex items-center">
                <ul className="flex justify-between p-10 m-2">
                    <li className="px-4"> Online Status: {onlineStatus?"Online":"Offline"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-medium text-m"><Link to="/cart"> <img className="w-5" src={cartImage} />{cart.length}</Link></li>
                    <li><button className="px-4" onClick={handleClick}> {btnName}</button></li>
                    {btnName === "Logout"?<li className="px-4 font-bold">{contextData.loggedInUser}</li>:""}

                </ul>
            </div>
        </div>
    );
};

export default Header;