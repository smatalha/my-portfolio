import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaMedium } from "react-icons/fa";

const Banner = () => {
    const [state] = React.useState({
        title: "I am Md Abu Talha Mian",
        text:
            "I am a Full-Stack Software Engineer. I’m very interested in any projects looking for development support or consultancy, especially startups and am keeping my eye out for internships.",
        image: "https://pbs.twimg.com/media/EtZtwLIXYAMEbXd?format=png&name=900x900",
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
