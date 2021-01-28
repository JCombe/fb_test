import React, { useState } from 'react';
import "./Profile.css"
import NavBar from "../Components/NavBar.js"


function Profile() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <NavBar />
            <h1>Julian Biscombes Profile</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Profile
