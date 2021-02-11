import React from "react";
import image from "../talha.1.jpg"

const About = () => {
    return (
        <div id="about" className= "container py-5">
            <div className="row">
                <div className="col-lg-6  col-xm-12">
                    <div className="photo-wrap mb-5" >
                        <img src={image} className=" profile-img rounded float-left" alt="Talha"/>
                    </div>
                </div>
                <div className="col-lg-6  col-xm-12">
                    <div className="about-heading">
                        <h1>About Me</h1>
                        <div className="common_border"></div>
                    </div>
                    <p>
                        I am a Full stack web developer with experience in AutoCAD draftsmanship, design planning and client relations.
                    </p>
                    <p>
                        I’m an intellectually curious and motivated developer who knows how to master complex material quickly, collaborate with a range of stakeholders, prioritize competing tasks under pressure, meet deadlines, and deliver a high quality product for the client.
                    </p>
                    <p>
                        I'm always interested in projects needing motivated development support, and especially enjoy working with startups.  I'd love to add value to your business, whether as a full-time team member, apprentice, intern or freelance consultant.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;