// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

// const Skills = () => {
//     return (
//         <div className="skills">
//         <h1 className="py-5">Skills</h1>
//         <div className="container">
//             <div className="row">
//             <div className="col-md-2 col-sm-6">
//                 <div className="box">
//                 <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
//                 <h3>Web Design</h3>
//                 <p>I approach each project individually and always focus on the result.</p>
//                 </div>
//             </div>
//             {/* - */}
//             <div className="col-md-3 col-sm-6">
//                 <div className="box">
//                 <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

//                 <h3>Web Development</h3>
//                 <p>Your website will be build with an new proven technologies.</p>
//                 </div>
//             </div>
//             {/* - */}
//             <div className="col-md-3 col-sm-6">
//                 <div className="box">
//                 <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

//                 <h3>Facebook Ads SMM</h3>
//                 <p>Your potential clients well see your skills or product on Facebook</p>
//                 </div>
//             </div>
//             {/* - */}
//             <div className="col-md-3 col-sm-6">
//                 <div className="box">
//                 <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>

//                 <h3>Google Ads</h3>
//                 <p>Your service or product will appear at the top of the Google search</p>.
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>

//     )
// }

// export default Skills;

import React from 'react'

import {  DiRor} from "react-icons/di";
import {
    SiRuby,
    SiGithub,
    SiReact,
    SiHtml5,
    SiCss3,
    SiVisualstudio,
    SiPostgresql,
    SiJavascript,
    SiBootstrap
} from "react-icons/si";


const Skills = () => {
    const [header] = React.useState({
    // mainHeader: "PORTFOLIO",
    subHeading: "Skills",
    text:
        "My current tech stack.",
    });
        const [state] = React.useState([
    {
        id: 1,
        icon: <SiGithub className="common_icons" />,
        heading: "Git",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
        id: 2,
        icon: <SiRuby className="common_icons" />,
        heading: "Ruby",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
        id: 3,
        icon: <DiRor className="common_icons" />,
        heading: "Rails",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 4,
        icon: <SiJavascript  className="common_icons" />,
        heading: "JScript",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
        id: 5,
        icon: <SiHtml5 className="common_icons" />,
        heading: "HTML",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
        id: 6,
        icon: <SiCss3 className="common_icons" />,
        heading: "CSS",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 7,
        icon: <SiReact className="common_icons" />,
        heading: "React",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 8,
        icon: <SiVisualstudio className="common_icons" />,
        heading: "VScode",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 9,
        icon: <SiPostgresql className="common_icons" />,
        heading: "Pgresql",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
            {
        id: 10,
        icon: <SiBootstrap className="common_icons" />,
        heading: "Bootstrap",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    }
    ]);
    return (
        <div id="skills" className="skills">
            <div className="container py-5">
                <div className="skills_header">
                    <div className="common">
                        <h1 className="main_header">{header.subHeading}</h1>
                        <div className="common_border"></div>
                        <p className="main_context">{header.text}</p>
                    </div>
                    <div className="row">
                        {state.map((info) => (
                        <div className="col-lg-2 col-md-6  col-sm-6">
                            <div className="box">
                                <div className="icon">
                                {info.icon}
                                </div>
                                <p className="skills_box_header">{info.heading}</p>
                                {/* <div className="skills_box_text">
                                    {info.text}
                                </div> */}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
