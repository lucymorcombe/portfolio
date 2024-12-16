import TweetCard from "./TweetCard";
import astroflop from "../assets/astroflop.jpg"
import inverttees from "../assets/inverttees.jpg"
import whatsupzeus from "../assets/whatsupzeus.jpg"
import pinned from "../assets/pinIcon.svg"
import nightline from "../assets/nightline.png"

function ProjectPosts() {
    return (
        <div className="posts">
            <div className="banner">
                <p className="accent">Posts</p>
                <p>Posts & replies</p>
                <p>Photos & videos</p>
            </div>
            <div className="pinned">
                <img src={pinned} />
                <p>Pinned Post</p>
            </div>
            <TweetCard
                content={<div className="nightline">
                            <p>In December 2024 I finished working on a project as a Volunteer Web Designer at GrassRootsWeb, creating a website for the charity London Nightline using Webflow. I worked as part of a team of two and took the lead on the project due to my previous experience. The website is fully responsive, with clean, modern visuals and cohesive branding that reflect the charity’s values. I worked closely with the client to understand their goals and translate them into a professional and effective online platform. They had an existing website, and I took inspiration from this and their branding document to improve and modernise their design. To see their previous site and the improvements I made <a href="https://drive.google.com/drive/folders/10X5Ymfb7SEaSYcgRivkHNTn3gU2Anclj?usp=sharing">#clickhere</a></p>
                        </div>}
                contentImage={nightline}
                imageLink="https://www.nightline.org.uk"
                replies="3"
                reposts="1"
                favourites="16"

            />
            <TweetCard 
                content={<div className="astroflop">
                            <p>For my most recent university project, I built an interactive website using ReactJS, featuring:</p>
                            <ul>
                                <li>&#x2022; A landing page and at least three subpages linked via routing</li>
                                <li>&#x2022; Component-based project architecture</li>
                                <li>&#x2022; Fully responsive design</li>
                                <li>&#x2022; Global styling configuration</li>
                                <li>&#x2022; Shared state</li>
                                <li>&#x2022; Compliance with accessibility and GDPR guidelines</li>
                                <li>&#x2022; A form with input validation</li>
                                <li>&#x2022; Integration with an external API to fetch and display data</li>
                            </ul>
                            <p>Astro-FLOP is an astrology site built for people who hate astrology but feel like they’re missing out. With more and more people taking an interest in and identifying with astrology, it’s hard to avoid this conversation and it can get frustrating not being able to get involved. With a laid-back feel and informal copy, Astro-FLOP aims to relate to its user and provide a space for complete beginners to try to understand what the fuss is about. <a href="https://github.com/lucymorcombe/astroflop/blob/main/README.md" target="_blank">Read more...</a></p>
                            </div>}
                contentImage={astroflop}
                imageLink="https://astroflop.netlify.app/"
                replies="1"
                reposts="1"
                favourites="7"
            />
            <TweetCard 
                content={<p>Invert Tees was the first site I built during my master's degree and I did this using HTML, CSS & JavaScript.<br/><br/>
                         Invert Tees is a non profit e-commerce site based on the principles of ethical garments, supporting small artists from minority backgrounds, and donating to charity.
                         This was an idea a friend and I had come up with years ago to support up and coming artists and help them share their work with their communities.
                         I decided to bring this idea to life for my project.<br/><br/>
                         The artwork featured on the site was created by my friend and her partner.</p>}
                contentImage={inverttees}
                imageLink="https://inverttees.netlify.app/"
                reposts="2"
                favourites="9"
            />
            <TweetCard 
                content={
                        <div className="whatsupzeus">
                        <p>For my final project during my bachelor's degree, I built an interactive learning site for children aged 8-14 telling the stories of Greek mythology.<br/><br/>
                        Easing users in by introducing key figures and creatures, What’s Up Zeus allows the user to control their learning experience and learn new pieces of information gradually. This site uses fun and vibrant images, and the information is staggered to be revealed by the user. <br/><br/>
                        I built this site in 2021 and I'm still very proud of a lot of elements. However, if I were to revisit the project with the knowledge I have now there are several things that would need to be reworked. These include:</p>
                        <ul>
                            <li>&#x2022; Spacing issues throughout with some images overlapping text</li>
                            <li>&#x2022; Text colours used when telling the character stories on the 'Meet the Family' page - increasing the contrast for accessibility</li>
                            <li>&#x2022; Tidying up the animations to ensure the site runs more smoothly</li>
                        </ul>
                        </div>
                        }
                contentImage={whatsupzeus}
                imageLink="https://whatsupzeus.netlify.app/"
                replies="3"
                reposts="1"
                favourites="5"
            />

        </div>
    )
}

export default ProjectPosts