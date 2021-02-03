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
    SiJavascript
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
    ]);
    return (
        <div className="skills">
            <div className="container">
                <div className="skills_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main_header">{header.subHeading}</h1>
                        <p className="main_context">{header.text}</p>
                        <div className="common_border"></div>
                    </div>
                    <div className="row">
                        {state.map((info) => (
                        <div className="col-9">
                            <div className="skills_box">
                                {info.icon}
                                <div className="skills_box_header">{info.heading}</div>
                                <div className="skills_box_text">
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

export default Skills;
