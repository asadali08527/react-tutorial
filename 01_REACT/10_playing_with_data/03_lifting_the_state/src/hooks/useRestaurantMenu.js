import { MENU_API_URL } from "../configs/constants";
import { useState, useEffect } from "react";

// Below is a custom hook that fetches restaurant menu data from the API
const useRestaurantMenu = (restaurantId) => {
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchRestInfo();
    }, []);

    const fetchRestInfo = async () => {
        const response = await fetch(MENU_API_URL+restaurantId);
        const json = await response.json();
        setRestInfo(json.data.cards);
    };

    return restInfo;
};

export default useRestaurantMenu;