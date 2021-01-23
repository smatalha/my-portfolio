import React from 'react'

const Navbar = () => {
    return (
        <nav className= "navbar">
            <div className= "container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                            {/* <img src="/images/logo.png" alt="logo" /> */}
                        <a data-placement="bottom" href="/index" target="_blank" title="Coded by Creative Tim" class="navbar-brand">Md Abu Talha Mian</a>
                    </ul>
                    <ul className= "navbar_right">
                        <li> <a href="">Home</a></li>
                        <li> <a href="">About</a></li>
                        <li> <a href="">Skills</a></li>
                        <li> <a href="">Blog</a></li>
                        <li> <a href="">Portfolio</a></li>
                        <li> <a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
