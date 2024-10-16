import Header from '../Components/Header'
import ProfileIcon from '../Components/ProfileIcon'
import InfoBanner from '../Components/InfoBanner'
import ContactMainContainer from '../Components/ContactMainContainer'

function ContactPage() {
    return (
        <>
        <div className='imageContainer'>
                <Header 
                    headerTitle="CONTACT ME"
                />
                <ProfileIcon />
            </div>
            <InfoBanner />
            <ContactMainContainer/>
        </>
    )
}

export default ContactPage