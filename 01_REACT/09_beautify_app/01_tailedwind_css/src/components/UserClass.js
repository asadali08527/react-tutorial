import React from'react';

class UserClass extends React.Component {
    // The constructor get invokes at the first whenever the class component is called
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: null,
                company: null,
                location: null,
                bio: null,
                avatar_url: null,
            }
        };
    }

    componentDidMount() {
        // This method get invokes at the end after render() is called, and it is usually used to set up subscriptions or make API calls
        
        // Example of making API call
        // const response = await fetch('https://api.github.com/users/asadali08527')
        // const json = await response.json();
        // this.setState({ userInfo: json });
        // OR
        fetch('https://api.github.com/users/asadali08527')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    userInfo: {
                        name: data.name,
                        company: data.company,
                        location: data.location,
                        bio: data.bio,
                        avatar_url: data.avatar_url,
                    }
                });
            });
    }

    componentDidUpdate() {
        // This method get invoked after every render(), and it is usually used to update the component's state based on props or other state variables
        console.log('Component updated');
        // We as a developer are not require to write this method as it automatically get triggered when the state changes
        
    };

    componentWillUnmount() {
        // This method get invoked when the component is about to be removed from the DOM
        console.log('Component will unmount');
        // We as a developer are not require to write this method as it automatically get triggered when the component is removed from the DOM
        // Still If we want to perform any cleanup actions before the component is removed from the DOM, we can implement it here
        
    }

    // The render() method get invokes after constructor of the class component
    render() {
        //const {name, company, location, bio, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>Name: {this.state.userInfo.name}</h1>
                <p>Company: {this.state.userInfo.company}</p>
                <p>Location: {this.state.userInfo.location}</p>
                <p>Bio: {this.state.userInfo.bio}</p>
                <img src={this.state.userInfo.avatar_url} />
            </div>
        );
    }
}

export default UserClass;
