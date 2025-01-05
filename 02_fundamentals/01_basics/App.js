import React from "react";
import ReactDOM from "react-dom/client";

//JSX => Babel compiles JSX to React.createElements  and React to HTML Element

//const h1 = React.createElement("h1", {id: "heading"}, "Welcome to React, through React Library!"); 

const jsxHeading = <h1 id="heading"> Welcome to React, through JSX Library!</h1> //similar to code written at line 6
const jsxHeadingMultiline = (
    <h1 id="heading"> 
    Welcome to React, through JSX Library!
    </h1>
)// Use Brackets () for Multiline jsx code

const jsxHeadingOtherAttributes = (
    <h1 id="heading" className="abc"> 
    Welcome to React, through JSX Library!
    </h1>
)
console.log(jsxHeadingOtherAttributes)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeadingOtherAttributes);



