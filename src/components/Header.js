import React from "react"
import Typed from "react-typed";
import { /* FaFacebookF, */FaTwitter, FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";


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
                    {/* <li><FaFacebookF className="header_icon" /></li> */}
                    <li>
                        <a className="hyper-link" onClick={() => window.open("https://twitter.com/SmaTalha")}><FaTwitter className="header_icon" />
                        </a>
                    </li>
                </ul>
                {/* <a href="#" className= "btn-main-offer">Contact Me</a> */}
            </div>
        </div>
    )
}

export default Header;