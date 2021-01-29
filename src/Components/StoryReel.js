import React from 'react'
import Story from "./Story"
import "./StoryReel.css"


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://www.slashfilm.com/wp/wp-content/images/topgun-maverick-tomcruise-cockpit.jpg"
                profileSrc="https://img.freepik.com/free-vector/jet-fighter-pilot-jpg_43623-254.jpg?size=338&ext=jpg"
                title="The Pilot"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWcEiYa3y33Wh0_OQLQVaAyK9sM512l-VyA&usqp=CAU"
                profileSrc="https://motoridersuniverse.com/uploads/news/60/b5/720/6479795dada0c0860b5.jpg"
                title="The Racer"
            />
            <Story
                image="https://i.pinimg.com/originals/4e/ca/b3/4ecab3d28455195539c00c69d7e80bd1.jpg"
                profileSrc="https://i.pinimg.com/originals/72/57/62/7257625b5356294f1c8713a034ad9368.jpg"
                title="The Skydiver"
            />
        </div>
    )
}

export default StoryReel
