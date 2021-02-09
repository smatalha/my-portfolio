import React from "react";
import Image from "../talha2.jpg"

const About = () => {
    return (
        <div id="about" className= "container py-5">
            <div className="row">
                <div className="col-lg-6  col-xm-12">
                    <div className="photo-wrap mb-5" >
                        <img className="profile-img" src={Image} alt="talha"/>
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
                        I’m very interested in any projects looking for development support or consultancy, especially startups and am keeping my eye out for internships.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;












// import React from 'react'

// const About = () => {
//     const [header] = React.useState ({ subHeading: "About Me", text: "Hello World! My name is Md Abu Talha Mian, Please call me Talha.  I'm a recent graduate from the Flatiron School Manhattan Campus, studying Full Stack Development and Software Engineering"});

//     const [state] = React.useState ([
//         {id:1, title: "Name:", text: "Md Abu Talha Mian"},
//         {id:2, title: "Email:", text: "sma.talha@gamil.com"},
//         {id:3, title: "Phone:", text: "+1-347-481-9925"},
//         {id:4, title: "LinkedIn:", text: "https://www.linkedin.com/in/mdabutalhamian"},
//     ]);
//     return (
//         <section className="about">
//             <div className="container">
//                 <div className="common">
//                     <h1 className="main_header">{header.subHeading}</h1>
//                     {/* <p className="main_content">{header.text}</p> */}
//                     <div className="common_border"></div>
//                 </div>
//                 <div className="row h-650 alignCenter">
//                     <div className="col-6">
//                         <div className="about_img">
//                             <img src="https://pbs.twimg.com/media/EtZzuOeWQAAAcB1?format=png&name=small" alt="talha"/>
//                             {/* <img src='<%=ResolveUrl("~/images/talha.1.png")%>' align="absmiddle" /> */}
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <div className="about_info">
//                             <h1>Hi There</h1>
//                             <div className="about_info_p1">
//                                 I am a Full stack web developer with experience in AutoCAD draftsmanship, design planning and client relations.
//                             </div>
//                             <div className="about_info_p2">
//                                 I’m an intellectually curious and motivated developer who knows how to master complex material
//                                 quickly, collaborate with a range of stakeholders, prioritize competing tasks under pressure, meet deadlines, and deliver a high quality product for the client.
//                             </div>
//                         </div>
//                         <div className="contact_info">
//                             <div className="row">
//                                 {state.map(info => (
//                                 <div className="col-6">
//                                     <strong>{info.title}</strong>
//                                     <p>{info.text}</p>
//                                 </div>
//                                 )
//                                 )
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About
