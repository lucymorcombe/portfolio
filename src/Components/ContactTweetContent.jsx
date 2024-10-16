import { Link } from "react-router-dom"

function ContactTweetContent() {
    return (
            <p className="tweetContent">
                I'm looking for full time work in Web Development for when I graduate in August. My first year grades are distinction level, and I plan to continue this in my second year. I'd love to hear from you!
                <Link to="/contact">
                #contactme
                </Link>
            </p>
    )
}

export default ContactTweetContent