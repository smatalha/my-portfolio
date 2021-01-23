import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaMedium } from "react-icons/fa";

const Banner = () => {
    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header_content">
                        <div className="header_section">
                            <ul className="header_ul">
                                <li><FaFacebookF/></li>
                                <li><FaTwitter/></li>
                                <li><FaPinterest/></li>
                                <li><FaInstagram/></li>
                                <li><FaMedium/></li>
                            </ul>
                            <h1>I am Md Abu Talha Mian</h1>
                            <p>I,m Talha Professional Full stack Developer looking for new gig</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="banner_img" src="./images/talha1.png" alt="Talha" />

                </div>
            </div>

        </div>
    </header>
}

export default Banner
