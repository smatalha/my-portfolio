import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar






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
//                         <a data-placement="bottom" href="/index" target="_blank" title="Coded by Talha" className="navbar-brand"> Talha </a>
//                     </ul>
//                     {state ? (
//                     <div className= "navbar_right">
//                         <li> <a href="#home">Home</a></li>
//                         <li> <a href="/about">About</a></li>
//                         <li> <a href="#skills">Skills</a></li>
//                         <li> <a href="#portfolio">Portfolio</a></li>
//                         <li> <a href="#resume">Resume</a></li>
//                         {/* <Link to="/">Home</Link>
//                         <Link to="/wishlist">Wish List</Link>
//                         <Link to="/sites">Heritages</Link>
//                         <Link to="/user">Profile</Link>
//                         <Link to="/login">Login</Link>
//                         <Link to="/about">about</Link> */}
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
