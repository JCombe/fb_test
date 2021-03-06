import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();


    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // some clever db stuff

        setInput("");
        setImageUrl("");

    };

    return (
        <div className="messageSender">
            <div className="topRow">
                <Avatar className="messageSender__avatar" src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}?`} id="message" />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="bottomRow">
                <div className="bottomRow__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="bottomRow__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="bottomRow__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
