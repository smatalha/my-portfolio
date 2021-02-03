import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaMedium } from "react-icons/fa";

const Banner = () => {
    const [state] = React.useState({
        title: "I am Md Abu Talha Mian",
        text:
            "A software developer  From New York.\
            Some of the stacks i'm working with are Ruby,\
            Ruby on Rails, Javascript, React.js",
        image: "/images/talha2.png",
    });
    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header_content">
                        <div className="header_section">
                            <ul className="header_ul">
                                <li><FaFacebookF className="header_icon" /></li>
                                <li><FaTwitter className="header_icon" /></li>
                                <li><FaPinterest className="header_icon" /></li>
                                <li><FaInstagram className="header_icon" /></li>
                                <li><FaMedium className="header_icon" /></li>
                            </ul>
                            <h1>{state.title}</h1>
                            <p>{state.text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="banner_img" src={state.image} alt="Talha" />
                </div>
            </div>
        </div>
    </header>
}

export default Banner;
