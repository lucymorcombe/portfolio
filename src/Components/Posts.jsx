import TweetCard from "./TweetCard"
import pinned from "../assets/pinIcon.svg"
import javascriptCert from "../assets/javascriptCert.jpg"
import { Link } from "react-router-dom"


function Posts() {
    return (
        <div className="posts">
            <div className="banner">
                <p className="accent">Posts</p>
                <p>Posts & replies</p>
                <p>Photos & videos</p>
            </div>
            <div className="pinned">
                <img src={pinned} />
                <p>Pinned Post</p>
            </div>
            <TweetCard 
                content={<p className="tweetContent">
                    Hi, I'm Lucy - welcome to my <strike>Twitter</strike> portfolio! I'm currently in my 2nd year of a part-time Web Development master's degree at Roehampton University, and am on track for a distinction. Prior to this, I have academic Web Development experience from my Media & Communications undergraduate degree, where I was introduced to HTML, CSS, and JavaScript as part of my specialisation in Interactive Media. I've since vastly improved and fine-tuned these skills, as well as adding React.JS and Python to my skillset. Alongside my degree, I volunteer for GrassRootsWeb, a non-profit Web Design agency who create free or affordable websites for charities, non-profits, start-ups, and small businesses.
                </p>}
                replies="2"
                reposts="5"
                favourites="13"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    During my time at university, I've created websites from conception to completion. I've also redesigned sites for small businesses in my hometown to build my experience and I am currently working on a website for a London charity through my volunteer work with GrassRootsWeb.
                    <Link to="/projects">
                    #gotoprojects
                    </Link>
                </p>}
                replies="1"
                reposts="3"
                favourites="7"
            />
            <TweetCard 
                content="I've completed the Learn JavaScript Course with Codecademy!"
                contentImage={javascriptCert}
                replies=""
                reposts="1"
                favourites="11"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    I'm looking for full time work in Web Development for when I graduate in August. My first year grades are distinction level, and I plan to continue this in my second year. I'd love to hear from you!
                    <Link to="/contact">
                    #contactme
                    </Link>
                </p>}
                replies="7"
                reposts="2"
                favourites="8"
            />
        </div>
    )
}

export default Posts