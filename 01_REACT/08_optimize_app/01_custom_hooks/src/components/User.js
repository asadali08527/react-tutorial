import React, { useState } from'react';

const User = () => {
    const [count, setCount] = useState(0);

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