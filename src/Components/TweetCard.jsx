import reply from "../assets/replyIcon.svg"
import repost from "../assets/repostIcon.svg"
import favourite from "../assets/favouriteIcon.svg"
import profilePic from "../assets/profilePic.jpg"


function TweetCard(props) {
    return (
        <div className="tweetCard">
            <div className="tweetInfo">
                <img src={profilePic} className="userImage"/>
                <p className="display">Lucy Morcombe</p>
                <p className="user">@morcombl</p>
            </div>
            <p className="content">{props.content}</p>
            <a href={props.imageLink} target="_blank"><img src={props.contentImage} className="contentImage"/></a>
            <div className="interactionBanner">
                <div className="replies">
                    <img src={reply} />
                    <p className="interactions">{props.replies}</p>
                </div>
                <div className="reposts">
                    <img src={repost} />
                    <p className="interactions">{props.reposts}</p>
                </div>
                <div className="favourites">
                    <img src={favourite} />
                    <p className="interactions">{props.favourites}</p>
                </div>
            </div>
        </div>
    )
}

export default TweetCard