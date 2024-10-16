import AccountOverview from "./AccountOverview";
import ContactPosts from "./ContactPosts";
import Skills from "./Skills";

function ContactMainContainer() {
    return (
        <div className="mainContainer">
            <AccountOverview />
            <ContactPosts />
            <Skills />
        </div>
    )
}

export default ContactMainContainer