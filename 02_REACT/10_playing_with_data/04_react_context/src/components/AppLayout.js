import Header from "./Header";
import Body from "./Body"
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
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
        <UserContext.Provider value={{loggedInUser: username, setUsername }}> //This is how we provide context accross the app
        <div className="app">
                <Header />
                <Outlet />
        </div>
        </UserContext.Provider>
    );
};

export default AppLayout;