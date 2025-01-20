import React from "react";
import ReactDOM from "react-dom/client";

// React Componenets( A java script function that returns a piece of jsx code or react element)
//  1. Class Based Components (Old fashion)
//  2. Functional Components (Latest Approach)
// While creating any component in React, follow naming convention of starting it with Uppercase letter for example below arrow function is a functional component
const HeadingComponentViaJsFunction = function()  {
    return <h1> Hello from React Functional Componenets</h1>;
};
//OR
const HeadingComponentViaArrowFunction = () => {
    return <h1> Hello from React Functional Componenets</h1>;
};
//OR
const HeadingComponentShortHand = () => <h1> Hello from React Functional Componenets</h1>;
//OR
const HeadingComponentMultilineJsx = () => (
    <h1 id="heading"> 
        Welcome to React, through JSX Library!
    </h1>
);
//OR
const HeadingComponentNestedTags = () => (
    <div id="container">
        <h1 id="heading"> 
            Welcome to React, through JSX Library!
        </h1>
    </div>
);




//convert react/jsx element to React components
//JSX element/object
const jsxObject = <h1 id="heading"> Welcome to React, through JSX Library!</h1> 
//To react components
const ReactComponent = () => <h1 id="heading"> Welcome to React, through React Component!</h1>

//Rendering React Component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent />)



// Component Composition
const H1 = () => <h1 id="heading"> Welcome to React, through Functional Components!</h1> 

const H2 = () => ( 
    <div id="container">
        <H1 />
        <h2 id="heading"> Welcome to React, inside Nested React Component!</h2>
    </div>
);

root.render(<H2 />)




// Any jscode written inside curly braces {} in JSX will get executed as javascript. for example
const jsVariableNumber = 1000;
const ComponentWithJs = () => ( 
    <div id="container">
        <H1 />
        {jsVariableNumber} // Writing Javascript code inside JSX
        <h2 id="heading"> Welcome to React, inside Nested React Component!  </h2>
    </div>
);

root.render(<ComponentWithJs />)
// That means we can mix and match Js code with JSX and Component




// Putting React element/JSX inside component
const element = <h1 id="heading"> Welcome to React, through JSX Library!</h1> 
// react components
const ReactComponent1= () => ( 
    <div id="container">
        {element} /* Putting JSX inside React Component*/
        <h2 id="heading"> Welcome to React, inside Nested React Component!  </h2>
    </div>
);
root.render(<ReactComponent1 />)



// Another example Putting React element/JSX inside component or vice versa
const element1 = <span> React Element: </span>
const element2 = <h1 id="heading"> Welcome to {element1}, through React Component and JSX!</h1> 

// react components
const ReactComponent2 = () => ( 
    <div id="container">
        {element2} 
        <h2 id="heading"> Welcome to React, inside Nested React Component!  </h2>
    </div>
);
root.render(<ReactComponent2 />)


//Calling JS function inside Component
const element3 = () => <h1 id="heading"> Welcome to React through React Component and JSX!</h1> 
const Element4 = () => <h2 id="heading"> Elements</h2> 


// react components
const ReactComponent3= () => ( 
    <div id="container">
        {element3()} 
        {Element4()}
        <Element4 />
        <Element4></Element4>
        <h3 id="heading"> Welcome to React, inside Nested React Component!  </h3>
    </div>
);
root.render(<ReactComponent3 />)




