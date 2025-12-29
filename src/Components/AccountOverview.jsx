import location from "../assets/locationIcon.svg"

function AccountOverview() {
    return (
        <div className="accountOverview">
            <div className="displayName"><h3>Lucy Morcombe</h3></div>
            <div className="username"><p>@morcombl</p></div>
            <div className="bio"><p>Recently graduated with a distinction from an MSc in Web Development at Roehampton University. Currently working in operations alongside small freelance web development projects. Looking for a role as a Graduate or Junior Front End Developer.</p></div>
            <div className="location"><img src={location}/><p>London</p></div>
        </div>
    )
}

export default AccountOverview