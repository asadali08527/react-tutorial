const h1 = React.createElement("h1",{id: "heading"}, "Welcome to React, through React Library!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h1)

/*
<div id="parent">
    <div id="child">
        <h1> Child h1 under nested div</h1>
        <h2> Sibling h2 under nested div</h1>
    </div>
</div>
*/
const div = React.createElement("div",{id: "parent"}, 
    React.createElement("div",{id: "child"}, 
        [
            React.createElement("h1",{}, "Child h1 under nested div"),
            React.createElement("h2",{}, "Sibling h2 under nested div")
        ]
    )
)
console.log(div)
//const some_other_div = ReactDOM.createRoot(document.getElementById("some-other-div"))
root.render(div)


/*
<div id="parent">
    <div id="child1">
        <h1> Child h1 under nested div</h1>
        <h2> Sibling h2 under nested div</h1>
    </div>
    <div id="child2">
        <h1> Child h1 under nested div</h1>
        <h2> Sibling h2 under nested div</h1>
    </div>
</div>
*/
const main_parent = React.createElement("div",{id: "main_parent"}, 
    [
        React.createElement("div",{id: "child1"},                         //<div id="child1">
            [
                React.createElement("h1",{}, "Child1 h1 under nested div"), //<h1> Child1 h1 under nested div</h1>
                React.createElement("h2",{}, "Sibling h2 under nested div") // Sibling h2 under nested div</h1>
            ]
        ),
        React.createElement("div",{id: "child1"},                          // <div id="child2">
            [
                React.createElement("h1",{}, "Child2 h1 under nested div"),    // <h1> Child2 h1 under nested div</h1>
                React.createElement("h2",{}, "Sibling h2 under nested div")   // Sibling h2 under nested div</h1>
            ]
        )
    ]
)
console.log(main_parent)
//const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(main_parent)