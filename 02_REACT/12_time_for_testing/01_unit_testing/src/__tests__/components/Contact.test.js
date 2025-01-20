import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../components/Contact";


describe("Contact us component", () => {
test ("Should load contact us component and test for text Contact Us",() => {
    render(<Contact />);
    const contact_us = screen.getByText("Contact Us");
    //Assertions
    expect(contact_us).toBeInTheDocument();

    }
);


it ("Should load contact us component and test heading",() => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Contact Us");

    }
);


test ("Should load contact us component and test button",() => {
    render(<Contact />);

    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();

    }
);

it ("Should load contact us component and test placeholder",() => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();

    }
);

// test ("Should load 2 input boxes when loads contact component",() => {

//     render(<Contact />);

//     const inputBoxes = screen.getAllByRole("textbox");
//     expect(inputBoxes.length) != 2

//     }
// );

});