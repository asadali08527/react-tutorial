import { logoUrl } from "../configs/constants";
import { cartImage } from "../configs/constants";
import { useState } from "react";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");

    const handleClick = () => {
        btnName === "Login"? setBtnName("Logout"): setBtnName("Login");  // toggling the button text between "Login" and "Logout";
    };
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {logoUrl} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart-logo" src={cartImage} /></li>
                    <button className="login-btn" onClick={handleClick}> {btnName}</button>

                    {/* OR
                    <button className="login-btn" onClick={() => {setBtnName("Logout")}}> {btnName}</button> */}

                </ul>
            </div>
        </div>
    );
};

export default Header;