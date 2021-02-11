import React from "react"
import Typed from "react-typed";
// import {Link} from "react-scroll"
import { FaTwitter, FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>I am Md Abu Talha Mian</h1>
                <Typed
                className="typed-text"
                strings={[ "I am a full-Stack Software Engineer", "Love Doing Web Development", "Looking for New Gig",]}
                typeSpeed={30}
                backSpeed={60}
                loop
                />
                <ul className="header_ul">
                    <li>
                        <a className="hyper-link" onClick={() => window.open("https://www.linkedin.com/in/mdabutalhamian/")}><FaLinkedin className="header_icon" />
                        </a>
                    </li>
                    <li>
                        <a className="hyper-link" onClick={() => window.open("https://github.com/smatalha")}><FaGithub className="header_icon" />
                        </a>
                    </li>
                    <li>
                        <a className="hyper-link" onClick={() => window.open("https://medium.com/@sma.talha")}><FaMedium className="header_icon" />
                        </a>
                    </li>
                    <li>
                        <a className="hyper-link" onClick={() => window.open("https://twitter.com/SmaTalha")}><FaTwitter className="header_icon" />
                        </a>
                    </li>
                </ul>
                {/* <Link smooth= {true} to="contact" offset={-110} className="nav-link" className= "btn-main-offer" href="#">Contact Me</Link> */}
            </div>
        </div>
    )
}

export default Header;