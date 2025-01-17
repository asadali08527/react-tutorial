import { Link } from "react-router-dom";
import { logoUrl } from "../configs/constants";
import { cartImage } from "../configs/constants";
import { useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () =>{
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
                    <li className="px-4"><img className="w-5" src={cartImage} /></li>
                    <button className="login-btn" onClick={handleClick}> {btnName}</button>

                    {/* OR
                    <button className="login-btn" onClick={() => {setBtnName("Logout")}}> {btnName}</button> */}

                </ul>
            </div>
        </div>
    );
};

export default Header;