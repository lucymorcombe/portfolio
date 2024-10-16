import location from "../assets/locationIcon.svg"

function AccountOverview() {
    return (
        <div className="accountOverview">
            <div className="displayName"><h3>Lucy Morcombe</h3></div>
            <div className="username"><p>@morcombl</p></div>
            <div className="bio"><p>Web Development MSc student at Roehampton University, graduating in August 2025. Looking for web development roles after graduation.</p></div>
            <div className="location"><img src={location}/><p>London</p></div>
        </div>
    )
}

export default AccountOverview