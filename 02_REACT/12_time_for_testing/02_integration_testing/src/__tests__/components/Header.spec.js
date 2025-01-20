import Header from "../../components/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import cartStore from "../../stores/cartStore";
import {BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component", () => {

    test("Should render the header component with a login button", () => {
        render(
            <Router>
                <Provider store={cartStore}>
                    <Header />
                </Provider>
            </Router>
        );
        //const header = screen.getByText("Login");
        // OR
        const loginButton = screen.getByRole("button", { name: "Login" });

        expect(loginButton).toBeInTheDocument();
    });


    it("Should render the header component with a Cart item 0", () => {
        render(
            <Router>
                <Provider store={cartStore}>
                    <Header />
                </Provider>
            </Router>
        );
        
        const cartItem = screen.getByText("0");

        expect(cartItem).toBeInTheDocument();
    });


    it("Should change Login button to logout onClick", () => {
        render(
            <Router>
                <Provider store={cartStore}>
                    <Header />
                </Provider>
            </Router>
        );
        
        const loginButton = screen.getByRole("button", { name: "Login" });

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "Logout" });

        expect(logoutButton).toBeInTheDocument();
    });
});