import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function NavBar() {

    const [dotState, setDotState] = useState(false)

    return (
        <div className="navBar">
            <div className="navBar__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="FaceBook" />
                <div className="navBar__input">
                    <SearchIcon />
                    <input type="type here" placeholder="Search" />
                </div>

            </div>

            <div className="navBar__center">
                <div className="navBar__option
                navBar__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="navBar__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="navBar__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="navBar__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="navBar__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="navBar__right">
                <div className="navBar__info">
                    <Avatar />
                    <h4>Julian</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div >
    )
}

// function PageIndicator() {
//     const Indicator = 
//     return ()
// }

export default NavBar

