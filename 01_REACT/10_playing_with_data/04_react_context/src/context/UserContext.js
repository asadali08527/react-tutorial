import React from "react";
import ReactDOM from "react-dom/client";

const UserContext = React.createContext(
    {
        loggedInUser: "Default User",
    }
);

export default UserContext;