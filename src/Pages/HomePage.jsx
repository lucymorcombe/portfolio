import MainContainer from '../Components/MainContainer'
import Header from '../Components/Header'
import ProfileIcon from '../Components/ProfileIcon'
import InfoBanner from '../Components/InfoBanner'
function HomePage() {
    return (
        <>
             <div className='imageContainer'>
                <Header 
                    headerTitle="WEB DEVELOPMENT PORTFOLIO"

                />
                <ProfileIcon />
            </div>
            <InfoBanner />
            <MainContainer/>
        </>
    )
}

export default HomePage