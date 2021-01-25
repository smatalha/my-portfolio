import React from 'react'
import { FaGithub } from "react-icons/fa";


const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading"> SERVICES</h3>
                        <h1 className="main_header">My Services</h1>
                        <p className="main_context">I'm passionate about what i do. I follow my Dream
                        </p>
                        <div className="common_border"></div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="services_box">
                                <FaGithub className="common_icons"/>
                                <div className="services_box_header">Web Development</div>
                                <div className="services_box_text">
                                    I do develop charismatic web 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
