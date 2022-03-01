import React from 'react'
import './../css/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <a href="mailto:w.a.c.ary@gmail.com" className="footer__link">w.a.c.ary@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="https://www.linkedin.com/in/william-cary/" target="_blank" rel="noopener noreferrer" className="social-list__link">
                        <i className="fab fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://github.com/willcary" target="_blank" rel="noopener noreferrer" className="social-list__link">
                        <i className="fab fa-github"></i>
                        <p>GitHub</p>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
