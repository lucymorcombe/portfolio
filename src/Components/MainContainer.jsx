import AccountOverview from "./AccountOverview";
import Posts from "./Posts";
import Skills from "./Skills";

function MainContainer() {
    return (
        <div className="mainContainer">
            <AccountOverview />
            <Posts />
            <Skills />
        </div>
    )
}

export default MainContainer