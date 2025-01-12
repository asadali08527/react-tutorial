import { fireEvent, render, screen } from "@testing-library/react";
import {Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../../components/RestaurantMenu";
import MOCK_DATA from "../mocks/MockRestaurantMenuData.json";
import cartStore from "../../stores/cartStore";
import Header from "../../components/Header";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "../../components/Cart";


global.fetch = jest.fn(() =>{

    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

describe("It should test the Cart component", () => {

    test("Should render the cart component", async() => {
        await act( async () => render(
            <Router>
                <Provider store={cartStore}>
                    <Header/>
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </Router>
        ));
        
        const accordionItem = screen.getByText("Non-veg Biriyani (7)");

        fireEvent.click(accordionItem); 
        
        const foodItems = screen.getAllByTestId("food-items");

        console.log(foodItems.length);  // it should print the number of food items in the menu

        // expect(foodItems.length).toBe(7);
        expect(foodItems.length).toBeGreaterThan(0);

        const addItemButtons = screen.getAllByRole("button",{name:"Add +"});

        console.log(addItemButtons.length);  // it should print the number of add buttons

        fireEvent.click(addItemButtons[0]);

        const count = screen.getByText("1");

        console.log(count);  // it should print the number of items in the cart

        expect(count).toBeInTheDocument();

        expect(screen.getAllByTestId("food-items").length).toBe(8);

        const clearCartButton = screen.getByRole("button",{name:"Clear Cart"});

        fireEvent.click(clearCartButton);

        expect(screen.getAllByTestId("food-items").length).toBe(7);

        expect(screen.getByText("Cart is empty. Add Item to the cart!")).toBeInTheDocument();






    });
    
});