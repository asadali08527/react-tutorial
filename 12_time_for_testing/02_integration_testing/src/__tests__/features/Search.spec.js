import { render, screen } from "@testing-library/react";
import Body from "../../components/Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/MockRestaurantListData.json";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() =>{

    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

describe("it should test the body component",  () => {
    // Helper function to be called before/after each test in this block
    beforeAll(() => {
        //jest.useFakeTimers();
        //console.log("Before All");
    });
    beforeEach(() => {
        //jest.clearAllMocks();
        //console.log("Before Each");
    });
    afterEach(() => {
        //jest.clearAllTimers();
        //console.log("After Each");
    });
    afterAll(() => {
        //console.log("After All");
    });


    test("should search Restaurant List for text Biryani", async () => {
        await act (
            async() => render(
                <Router>
                    <Body />
                </Router>
            ));
        
            const searchButton = screen.getByText("Search");

            expect(searchButton).toBeInTheDocument();

            // const searchInput = screen.getByPlaceholderText("Search for restaurants...");
            // OR
            const searchInput = screen.getByTestId("search-input");

            fireEvent.change(searchInput, { target: { value: "Biryani" } });

            fireEvent.click(searchButton);

            const cards = screen.getAllByTestId("restaurant-test-card");

            //console.log(cards.length);

            expect(cards.length).toBeGreaterThan(0);
            //expect(cards.length).toBe(33);

        });

    test("should filter Top Rated Restaurant List ", async () => {
            await act (
                async() => render(
                    <Router>
                        <Body />
                    </Router>
                ));
            
                
    
                const topRatedButton = screen.getByRole("button",{name: "Top Rated Restaurant"});
                
                fireEvent.click(topRatedButton);

                const cards = screen.getAllByTestId("restaurant-test-card");

                //console.log(cards.length);
    
                expect(cards.length).toBeGreaterThan(0);
                //expect(cards.length).toBe(92);
    
            });

});

    