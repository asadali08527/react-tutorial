import { logoUrl } from "../configs/constants";
import { cartImage } from "../configs/constants";
const Header = () =>{
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
                </ul>
            </div>
        </div>
    );
};

export default Header;