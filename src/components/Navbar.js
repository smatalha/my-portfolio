import React from "react"
import {Link} from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Portfolio from "./Portfolio";
// import Resume from "./Resume";
// import Skills from "./Skills";
// import About from "./About";
// import Header from "./Header";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Talha</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars}  style={{ color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth= {true} to="home"  offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="about" offset={-110} className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="skills"  offset={-110} className="nav-link" href="#">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="resume"  offset={-110} className="nav-link" href="#">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="portfolio"  offset={-110} className="nav-link" href="#">Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;






// import React from 'react'
// // import { Link } from 'react-router-dom';
// import { FaAlignJustify } from "react-icons/fa";
// const Navbar = () => {
//     const [state, setState] = React.useState(true);
//     return (
//         <nav className= "navbar">
//             <div className= "container">
//                 <div className="navbar__container">
//                     <ul className="navbar_left">
//                             {/* <img src="/images/logo.png" alt="logo" /> */}
//                         <Link data-placement="bottom" href="/index" target="_blank" title="Coded by Talha" className="navbar-brand"> Talha </Link>
//                     </ul>
//                     {state ? (
//                     <div className= "navbar_right">
//                         <li> <a href="#home">Home</a></li>
//                         <li> <a href="/about">About</a></li>
//                         <li> <a href="#skills">Skills</a></li>
//                         <li> <a href="#portfolio">Portfolio</a></li>
//                         <li> <a href="#resume">Resume</a></li>
//                     </div>
//                             ) : (
//             ""
//         )}
//                 </div>
//             </div>
//                 <div className="toggle" onClick={() => setState(!state)}>
//                     <FaAlignJustify />
//                 </div>
//         </nav>
//     )
// }

// export default Navbar;
