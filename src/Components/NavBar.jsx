import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import profilePic from "../assets/profilePic.jpg"
import logo from "../assets/logo.svg"
import home from "../assets/homeIcon.svg"
import about from "../assets/aboutIcon.svg"
import projects from "../assets/projectsIcon.svg"
import contact from "../assets/contactIcon.svg"


function NavBar() {
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
            <Route path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/about" element={Projects} />
            <Route path="/about" element={Contact} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default NavBar