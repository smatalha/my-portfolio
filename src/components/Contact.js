import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
    FaTwitterSquare
} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                    <ul className="contactCircles" >
                        <li>
                            <FaFacebookSquare/>
                        </li>
                        <li>
                            <FaInstagramSquare />
                        </li>
                        <li>
                            <FaPinterestSquare/>
                        </li>
                        <li>
                            <FaTwitterSquare />
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Contact
