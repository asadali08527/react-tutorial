import React from'react';

class UserClass extends React.Component {
    // The constructor get invokes at the first whenever the class component is called
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("Child Constructor"); // Prints props to the consol
    }

    componentDidMount() {
        // This method get invokes at the end after render() is called, and it is usually used to set up subscriptions or make API calls
        console.log("Child Component Did Mount"); 
    }

    // The render() method get invokes after constructor of the class component
    render() {
        const {count} = this.state;
        console.log("Child Render"); // Prints props to the console
        return (
            <div className="user-card">
                <h1>Name: {this.props.name}</h1>
                <p>Email: {this.props.email}</p>
                <p>Location: {this.props.location}</p>
                <p>Age: {this.props.age}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Contact: {this.props.contact}</p>
                <button onClick={()=>{
                    this.setState(
                        {count: count+1}
                    );
                }}>Count: {this.state.count}</button>
            </div>
        );
    }
}

export default UserClass;
