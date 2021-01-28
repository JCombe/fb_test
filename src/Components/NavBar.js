import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"



function NavBar() {

    const [dotState, setDotState] = useState("")

    return (
        <div className="bg-blue-900 flex justify-evenly h-auto text-white">
            <Link onClick={() => } to="/Home" state={setDotState(true)}>Home
            </Link>
            <Link to="/Profile">Profile</Link>
            <div>Boolean is set to {String(dotState)}</div>
        </div >
    )
}

// function PageIndicator() {
//     const Indicator = 
//     return ()
// }

export default NavBar

