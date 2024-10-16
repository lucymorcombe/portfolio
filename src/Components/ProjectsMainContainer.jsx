import AccountOverview from "./AccountOverview";
import ProjectPosts from "./ProjectsPosts";
import Skills from "./Skills";

function ProjectsMainContainer() {
    return (
        <div className="mainContainer">
            <AccountOverview />
            <ProjectPosts />
            <Skills />
        </div>
    )
}

export default ProjectsMainContainer