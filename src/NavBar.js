import React from 'react';
import "./NavBar.css";

function NavBar() {
    return (
        <div className="bg-gray-900 flex justify-evenly h-auto ">
            <div className="text-white">Home</div>
            <div className="text-white">Profile</div>
            <div className="text-white">Messages</div>
            <div className="text-white">Settings</div>
        </div>
    )
}

export default NavBar

