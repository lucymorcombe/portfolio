import Header from '../Components/Header'
import ProfileIcon from '../Components/ProfileIcon'
import InfoBanner from '../Components/InfoBanner'
import AccountOverview from '../Components/AccountOverview'
import ProjectsMainContainer from '../Components/ProjectsMainContainer'

function ProjectsPage() {
    return (
        <>
        <div className='imageContainer'>
                <Header 
                    headerTitle="MY PROJECTS"
                />
                <ProfileIcon />
            </div>
            <InfoBanner />
            <ProjectsMainContainer/>
            
        </>
    )
}

export default ProjectsPage