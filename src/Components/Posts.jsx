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
                    Hi, I'm Lucy - welcome to my <strike>Twitter</strike> portfolio! I am a Front End Developer (recently graduating with a distinction from a Master’s in Web Development 🎉) and I’m looking to begin my career within a team of like-minded people that I can grow with and learn from. <br/><br/>Alongside my Master’s, I specialised in interactive media during my undergraduate degree, have taken on several small freelance projects, and am currently modernising and migrating my company’s outdated Joomla website. I love building websites and am really keen to get my foot in the door, and I would love this to be within an agency.
                </p>}
                replies="2"
                reposts="5"
                favourites="13"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    During my time at university, I've created websites from conception to completion using HTML, CSS, JavaScript, and ReactJS. I've also created a website for the charity London Nightline through my volunteer work with GrassRootsWeb and I've redesigned sites for small businesses in my hometown to build my experience.
                    <Link to="/projects">
                    #gotoprojects
                    </Link>
                </p>}
                replies="1"
                reposts="3"
                favourites="7"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    London Nightline - a client I originally worked with while volunteering at GrassRootsWeb - reached out to me directly for freelance work!<br/><br/>I loved working with the team again. Check out their updated site here
                    <Link to="https://www.nightline.org.uk/">
                    #LondonNightline
                    </Link>
                </p>}
                replies="2"
                reposts="1"
                favourites="5"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    Super happy to share that I earned a distinction for my MSc project, Roomie, and for my degree overall. It’s been a tough two years as a part-time student, balancing work and study, but it’s definitely been worth it.
                </p>}
                replies="8"
                reposts="3"
                favourites="21"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    After months of hard work, I can finally say that my MSc project, Roomie, is finished - not to mention the 10,000 word report to go with it!<br/><br/>
                    Roomie is a room and flatmate finding platform that matches users based on personality. Think Tinder or Hinge merged with SpareRoom. It uses a swipe based interface where users like or pass on potential matches and only connect when there’s mutual interest, cutting out the endless messages that often come with finding a room or flatmate. <br/><br/>
                    Roomie also features a compatibility algorithm to ensure users see their best matches first. It’s come a long way and gone through several redesigns, but I’m really proud of how it’s turned out.
                </p>}
                replies="5"
                reposts="2"
                favourites="18"
            />
            <TweetCard 
                content={<p className="tweetContent">
                    I'm looking for full time work in Front End Web Development and can't wait to get started. I'd love to hear from you!
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