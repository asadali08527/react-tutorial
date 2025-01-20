import User from "./User";
import UserClass from "./UserClass";
import { Component } from'react';
//Example to use context in Class based components
import UserContext from "../context/UserContext";

// const About = () => {

//     return (
//         <div>
//             <h1>About Page</h1>
//             <p>This is the about us page.</p>
//             {/* Function based components */}
//             <User /> 
//             {/* Class based components */}
//             <UserClass name="Asad" email="asad@asad.com" location="London" age="30" gender="Male" contact="7767440208" /> 
//         </div>
//         );
// };

class About extends Component {
    constructor(props) {
        super(props);// Not required if no properties passed to the component
        console.log("Parent Constructor"); 
    }

    componentDidMount() {
        console.log("Parent Component Did Mount"); 
    }

    render() {
        console.log("Parent Render"); 
        return (
            <div>
                <h1>About Page</h1>
                <div>
                {/* LoggedIn User:  <UserContext.Consumer>{(data)=>data.loggedInUser}</UserContext.Consumer> */}
                <UserContext.Consumer>{({loggedInUser})=>(
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
                </UserContext.Consumer>
                </div>
                <p>This is the about us page.</p>
                {/* Class based components */}
                <UserClass /> 
                {/* Function based components */}
                <User /> 
            </div>
            );
    }
}

export default About;
