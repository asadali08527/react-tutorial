import Header from "./Header";
import Body from "./Body"
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { Provider } from "react-redux";
import cartStore from "../stores/cartStore";

const AppLayout = () =>{
    const [username, setUsername] = useState();

    useEffect(() =>{ 
        // Suppose data changing dynamically and need to be access anywhere in the app
        const user = {
            name :"Asad Ali"
        };  // This is a mock user data, in real world application you can fetch data from server or any other source. 
        setUsername(user.name);
    }, []);
    
    
    return (
        // Connecting the store to the app layout
        <Provider store={cartStore}> 
        {/* This is how we provide context accross the app */}
            <UserContext.Provider value={{loggedInUser: username, setUsername }}> 
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

export default AppLayout;