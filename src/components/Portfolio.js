import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import event from "./event.png";
import exploreTheHeritage from "./ExploreTheHeritage.png";
import coinMarketWatch from "./coinMarketWatch.png";
import {  FaSearchPlus} from "react-icons/fa";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    const openPopupboxEvent  = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={event} alt="Event Inc Project..."/>
            <p>Event planner where users track an event, create an event, make a to-do list.
                Designed with Ruby on Rails as back-end <br/>and React as front end. Used React Semantic UI and Vanilla CSS for styling to create a responsive web page<br/>
                Authenticated users at login by encrypting identifying account information via JWT</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/katmaldon/EventsInc-Frontend")}>https://github.com/katmaldon/EventsInc-Frontend</a><br/>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=YSvnqKWrP88")}>https://www.youtube.com/watch?v=YSvnqKWrP88</a>
            </>
        )
            PopupboxManager.open({ content })
    }

    const popupboxConfigEvent = {
        titleBar: {
            enable: true,
            // text: "Event Inc Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
        const openPopupboxExploreTheHeritage  = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={exploreTheHeritage} alt="Explore The Heritage Project..."/>
            <p>React web-application with Rails back-end that helps travelers find heritage sites, make their wishlist,  track visited <br/>sites, leave a comment about the site and delete that comment. Customized database schema and REST API with <br/>Active Record, Postgres, and Ruby on Rails.Used React frontend, iFramed Google map with encrypted API & DarkSky<br/> RESTful API endpoints to render real-time weather forecast. Utilized JSON Web Tokens and localStorage to store <br/>encrypted user information client-side</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/smatalha/explore_heritage")}>https://github.com/smatalha/explore_heritage</a><br/>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=ezq8qmIU1OU&t=1s")}>https://www.youtube.com/watch?v=ezq8qmIU1OU&t=1s</a>
            </>
        )
            PopupboxManager.open({ content })
    }

    const popupboxConfigExploreTheHeritage = {
        titleBar: {
            enable: true,
            // text: "Explore The Heritage Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxCoinMarketWatch  = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={coinMarketWatch} alt="Coin Market Watch Project..."/>
            <p>Coin market watch tracks crypto currency. Built an SPA entirely on Ruby, using Rails as backend and embedded <br/>Ruby as frontend. Utilized API data from Nomics & Coingecko to create crypto tracker</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ronaldabreu-dev/coin_market_watch_mod2/tree/master")}>https://github.com/ronaldabreu-dev/coin_market_watch_mod2/tree/master</a><br/>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=YoX86zGblOc")}>https://www.youtube.com/watch?v=YoX86zGblOc</a>
            </>
        )
            PopupboxManager.open({ content })
    }

    const popupboxConfigCoinMarketWatch = {
        titleBar: {
            enable: true,
            // text: "Coin Market Watch Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5" >Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxEvent}>
                        <img className="portfolio-image" src={event} alt="Event Inc Project..."/>
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon" />
                    </div>
                    {/* {-} */}
                    <div className="portfolio-image-box" onClick={openPopupboxExploreTheHeritage}>
                        <img className="portfolio-image" src={exploreTheHeritage} alt="Explore The Heritage Project..."/>
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon" />
                    </div>
                    {/* {-} */}
                    <div className="portfolio-image-box" onClick={openPopupboxCoinMarketWatch}>
                        <img className="portfolio-image" src={coinMarketWatch} alt="Coin Market Watch Project..."/>
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon" />
                    </div>
                </div>
            </div>
            <PopupboxContainer  {...popupboxConfigEvent} />
            <PopupboxContainer  {...popupboxConfigExploreTheHeritage} />
            <PopupboxContainer  {...popupboxConfigCoinMarketWatch} />
            <ScrollUpButton />
        </div>
    )
}

export default Portfolio;