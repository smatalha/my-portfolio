import React from 'react'
import {
    FaGithub,
//     FaCircleNotch,
//     FaApple,
//     FaFileVideo,
//     FaSearchDollar,
//     FaReact
} from "react-icons/fa";
import {  DiRor} from "react-icons/di";
import { SiYoutube} from "react-icons/si";


const Portfolio = () => {
    const [header] = React.useState({
    // mainHeader: "PORTFOLIO",
    subHeading: "Portfolio",
    text:
        "",
    });
        const [state] = React.useState([
    {
        id: 1,
        icony: <SiYoutube className="common_icons" />,
        iconG: <FaGithub className="common_icons" />,
        heading: "Explore The Heritage",
        text:
        "React web-application with Rails back-end that helps travelers find heritage sites, make their wishlist, track visited sites, leave a comment about the site and delete that comment",
    },
    {
        id: 2,
        icony: <SiYoutube className="common_icons" />,
        iconG: <FaGithub className="common_icons" />,
        heading: "EventInc",
        text:
        "Event planner where users track an event, create an event, make a to-do list. Designed with Ruby on Rails as back-end and React as front end. Authenticated users at login by encrypting identifying account information via JWT",
    },
    {
        id: 3,
        icony: <SiYoutube className="common_icons" />,
        iconG: <FaGithub className="common_icons" />,
        heading: "Coin Market Watch",
        text:
        "Coin market watch tracks crypto currency. Built an SPA entirely on Ruby, using Rails as backend and embedded Ruby as frontend. Utilized API data from Nomics & Coingecko to create crypto tracker",
    },
    //     {
    //     id: 1,
    //     icony: <SiJavascript  className="common_icons" />,
    //     heading: "JScript",
    //     text:
    //     "Lorem Ipsum is simply dummy text of the printing typesetting\
    //     industry. simply dummy",
    // },
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main_header">{header.subHeading}</h1>
                        <p className="main_context">{header.text}</p>
                        <div className="common_border"></div>
                    </div>
                    <div className="row">
                        {state.map((info) => (
                        <div className="col-4">
                            <div className="portfolio_box">
                                <div className="portfolio_box_header"><strong>{info.heading}</strong></div>
                                <div className="portfolio_box_text">
                                    {info.text}
                                </div>
                                <ul className="icon">
                                    <li>
                                        {info.icony}
                                    </li>
                                    <li>
                                        {info.iconG}
                                    </li>
                                </ul>
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
