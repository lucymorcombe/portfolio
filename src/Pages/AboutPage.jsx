import Header from '../Components/Header'
import ProfileIcon from '../Components/ProfileIcon'
import InfoBanner from '../Components/InfoBanner'
import AccountOverview from '../Components/AccountOverview'

function AboutPage() {
    return (
        <>
        <div className='imageContainer'>
                <Header 
                    headerTitle="ABOUT ME"

                />
                <ProfileIcon />
            </div>
            <InfoBanner />
            <AccountOverview />
        </>
    )
}

export default AboutPage