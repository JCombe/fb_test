import React from 'react'
import "./Feed.css"
import StoryReel from "./Components/StoryReel.js"
import MessageSender from "./Components/MessageSender.js"
import Post from "./Components/Post.js"

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
                message="Nice work, I hope you've been grinding 80h a week"
                timestamp="17:30"
                username="Elon Musk"
                image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0"
            />
            <Post
                profilePic="https://s23527.pcdn.co/wp-content/uploads/2020/06/Mike-Tyson-1.jpg.optimal.jpg"
                message="He wanted the opponent to never have the chance to believe he could beat you."
                timestamp="18:00"
                username="Mike Tyson"
                image="https://cdn.i-scmp.com/sites/default/files/styles/og_twitter_scmp_review/public/d8/images/methode/2019/10/21/4c37d6d0-f3dc-11e9-87ad-fce8e65242a6_image_hires_190248.jpg?itok=OWsorqdY&v=1571655774"
            />
            <Post
                profilePic="https://c8.alamy.com/comp/2B01BD3/sun-wu-style-name-changqing-better-known-as-sun-tzu-or-sunzi-was-an-ancient-chinese-military-general-strategist-and-philosopher-who-is-believed-to-have-authored-the-art-of-war-an-influential-ancient-chinese-book-on-military-strategy-sun-tzu-has-had-a-significant-impact-on-chinese-and-asian-history-and-culture-both-as-an-author-of-the-art-of-war-and-through-legend-during-the-19th-and-20th-centuries-sun-tzus-art-of-war-grew-in-popularity-and-saw-practical-use-in-western-society-and-his-work-has-continued-to-influence-both-asian-and-western-culture-and-politics-2B01BD3.jpg"
                message="All warfare is based on deception."
                timestamp="18:10"
                username="Sun Tzu"
                image="https://blog.tutorming.com/hubfs/sun-tzu-statue.jpg"
            />
        </div>
    )
}

export default Feed
