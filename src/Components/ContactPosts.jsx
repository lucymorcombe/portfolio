import TweetCard from "./TweetCard";
import pinned from "../assets/pinIcon.svg"

function ContactPosts() {
    return (
        <>
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
            content={<div className="contactMeLink"><p>Thanks for browsing - I'd love to hear from you! You can get in touch with me via email at <a href="mailto:lucymaymorcombe@gmail.com">lucymaymorcombe@gmail.com</a> or via <a href="https://www.linkedin.com/in/lucymorcombe/" target="_blank">LinkedIn</a>.</p></div>}
            replies="3"
            reposts="2"
            favourites="12"
       />
        </div>
        </>
    )
}

export default ContactPosts