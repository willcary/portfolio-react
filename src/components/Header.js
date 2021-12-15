import React, { useState } from 'react'
import './../css/header.css'

function Header() {
    const [navOpen, setNavOpen] = useState(false)

    function handleToggle() {
        setNavOpen(!navOpen)
    }

    function handleClick() {
        setNavOpen(false)
    }

    return (
        <header>
            <div className={navOpen ? "header nav-open" : "header"}>
                <div className="logo">
                    <a href="#home">
                        <i className="fas fa-home logo__img"></i>
                    </a>
                </div>
                <button className="nav-toggle" aria-label="toggle navigation" onClick={handleToggle}>
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item home"><a className="nav__link" href="#home" onClick={handleClick}>Home</a></li>
                        <li className="nav__item"><a className="nav__link" href="#services" onClick={handleClick}>Services</a></li>
                        <li className="nav__item"><a className="nav__link" href="#about" onClick={handleClick}>About me</a></li>
                        <li className="nav__item"><a className="nav__link" href="#work" onClick={handleClick}>My Work</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
