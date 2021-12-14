import React from 'react'

function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <a href="#home">
                        <i className="fas fa-home logo__img"></i>
                    </a>
                </div>
                <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item home"><a className="nav__link" href="#home">Home</a></li>
                        <li className="nav__item"><a className="nav__link" href="#services">Services</a></li>
                        <li className="nav__item"><a className="nav__link" href="#about">About me</a></li>
                        <li className="nav__item"><a className="nav__link" href="#work">My Work</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
