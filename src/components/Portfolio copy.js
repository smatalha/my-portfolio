import React from 'react'
// import {
//     FaGithub,
//     FaCircleNotch,
//     FaApple,
//     FaFileVideo,
//     FaSearchDollar,
//     FaReact
// } from "react-icons/fa";
import {  DiRor} from "react-icons/di";
import { SiRails, SiRuby, SiGithub, SiReact, SiHtml5, SiCss3, SiVisualstudio, SiPostgresql, SiJavascript } from "react-icons/si";


const Portfolio = () => {
    const [header] = React.useState({
    // mainHeader: "PORTFOLIO",
    subHeading: "My Portfolio",
    text:
        "",
    });
        const [state] = React.useState([
    {
        id: 1,
        icon: <SiGithub className="common_icons" />,
        heading: "Github",
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
        id: 1,
        icon: <SiJavascript  className="common_icons" />,
        heading: "JScript",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
        id: 4,
        icon: <SiHtml5 className="common_icons" />,
        heading: "HTML",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
        id: 5,
        icon: <SiCss3 className="common_icons" />,
        heading: "CSS",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 6,
        icon: <SiReact className="common_icons" />,
        heading: "React",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 1,
        icon: <SiVisualstudio className="common_icons" />,
        heading: "VScode",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
        {
        id: 1,
        icon: <SiPostgresql className="common_icons" />,
        heading: "Pgresql",
        text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    
    ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main_header">{header.subHeading}</h1>
                        <p className="main_context">{header.text}</p>
                        <div className="common_border"></div>
                    </div>
                    <div className="row">
                        {state.map((info) => (
                        <div className="col-9">
                            <div className="services_box">
                                {info.icon}
                                <div className="services_box_header">{info.heading}</div>
                                <div className="services_box_text">
                                    {/* {info.text} */}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
