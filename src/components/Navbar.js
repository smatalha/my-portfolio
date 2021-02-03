import React from 'react'
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className= "navbar">
            <div className= "container">
                <div className="navbar__container">
                    <ul className="navbar_left">
                            {/* <img src="/images/logo.png" alt="logo" /> */}
                        <a data-placement="bottom" href="/index" target="_blank" title="Coded by Talha" class="navbar-brand">Md Abu Talha Mian</a>
                    </ul>
                    {state ? (
                    <ul className= "navbar_right">
                        <li> <a href="">Home</a></li>
                        <li> <a href="">About</a></li>
                        <li> <a href="">Skills</a></li>
                        <li> <a href="">Blog</a></li>
                        <li> <a href="">Portfolio</a></li>
                        <li> <a href="">Contact</a></li>
                    </ul>
                            ) : (
            ""
        )}
                </div>
            </div>
                <div className="toggle" onClick={() => setState(!state)}>
                    <FaAlignJustify />
                </div>
        </nav>
    )
}

export default Navbar;
