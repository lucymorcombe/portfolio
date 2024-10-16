import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import profilePic from "./assets/profilePic.jpg"
import logo from "./assets/logo.svg"
import home from "./assets/homeIcon.svg"
import about from "./assets/aboutIcon.svg"
import projects from "./assets/projectsIcon.svg"
import contact from "./assets/contactIcon.svg"
import Header from './Components/Header'
import ProfileIcon from './Components/ProfileIcon'
import InfoBanner from './Components/InfoBanner'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="navBar">
            <div className="leftNav">
                <ul>
                    <Link to="/">                    
                    <li><img src={home} className="navImg"/>Home</li>
                    </Link>
                    {/* <Link to="/about"> 
                    <li><img src={about} className="navImg"/>About</li>
                    </Link> */}
                    <Link to="/projects"> 
                    <li><img src={projects} className="navImg"/>Projects</li>
                    </Link>
                </ul>
            </div>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="rightNav">
                <div className="navProfilePic">
                    <img src={profilePic} />
                </div>
                <div className="contactMe">
                    <Link to="/contact">
                    <button><img src={contact}/><p>Contact</p></button>
                    </Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            {/* <Route path="/about" element={<AboutPage/>} /> */}
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
