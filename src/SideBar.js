import React from 'react'
import "./SideBar.css"
import SideBarRow from "./Components/SideBarRow.js"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from '@material-ui/icons'


function SideBar() {
    return (
        <div className="sideBar">
            <SideBarRow src="https://images.all-free-download.com/images/graphicthumb/picture_of_the_sandy_beach_coconut_trees_165913.jpg"
                title="Julian Biscombe" />
            <SideBarRow Icon={LocalHospitalIcon}
                title="Covid-19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default SideBar
