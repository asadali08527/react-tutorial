import React, { useState, useEffect } from'react';

const User = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {

        //API Calls etc
        console.log('Component mounted');
        // Below Timer for demonstration purpose to demonstrate how can it be clenaed up and unmounted
        const timer = setInterval(() => {    
            console.log('Time ticked');
        }, 1000);
    
        return () => {
            // Clean up the timer when the component is unmounted.
            clearInterval (timer);
           console.log('Component will unmount');
        }
        }, []); // Empty array means this effect will only run once on mount. If you want it to run every time the component updates, you can leave it empty.
    
    return (
        <div className="user-card">
            <h1>Name: Asad</h1>
            <p>Email: asad@example.com</p>
            <p>Location: London</p>
            <p>Age: 30</p>
            <p>Gender: Male</p>
            <p>Contact: 7767440208</p>
            <button onClick={()=>{
                    setCount(count+1)
                    }}>Count: {count}
            </button>        
        </div>
    );
};

export default User;