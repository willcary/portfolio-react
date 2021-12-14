import React from "react";

function App() {
  return (
    <>
      {/* <!----- Header -----> */}
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

    {/* <!----- Introduction -----> */}
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">Hi, I'm <strong>Will Cary</strong></h1> 
        <p className="section__subtitle section__subtitle--intro">front-end developer</p>
        <img src="./images/LakeG.jpg" alt="Will Cary portrait with his dog" className="intro__img" />
    </section>

    {/* <!----- Services -----> */}
    <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
            <div className="service service-1">
                <h3>Websites</h3>
                <p>Lucas ipsum dolor sit amet wedge kashyyyk r2-d2 padmé boba darth solo organa jango yavin. Yoda secura jango thrawn darth
                jabba vader. Calrissian boba secura moff mandalore.</p>
            </div>
            <div className="service service-2">
                <h3>Web Apps</h3>
                <p>Grievous organa mon maul skywalker obi-wan solo obi-wan skywalker. Dagobah sebulba tusken raider hoth anakin hutt organa
                amidala palpatine. Lars solo ahsoka fett skywalker binks mace.</p>
            </div>
            <div className="service service-3">
                <h3>WordPress</h3>
                <p>Skywalker kessel bespin mon ahsoka ben dooku qui-gon. Ben amidala ackbar skywalker jar. Luke ben bothan boba leia jawa
                antilles amidala qui-gonn.</p>
            </div>
        </div> 
        <a href="#work" className="btn">My Work</a>
    </section>


    {/* <!----- About Me -----> */}
    <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based in Chapel Hill, NC</p>
        <div className="about-me__body">
            <p>Wampa padmé sith darth mace. Calamari grievous kamino grievous qui-gon kashyyyk secura. Darth hutt kamino yavin thrawn
            leia skywalker. Skywalker zabrak mon darth. Vader kamino ben lars luke organa. Jade kessel obi-wan kenobi droid gonk
            dagobah calrissian. Kit tatooine vader c-3p0 biggs darth. Dantooine skywalker kamino luke r2-d2 hoth grievous mara solo.</p>
            <p>Kamino calrissian darth windu dantooine calamari jabba darth baba. Calamari moff darth c-3po. Moff palpatine gonk yavin
            skywalker. Solo jango darth antilles wookiee. Dagobah vader aayla sebulba solo kenobi c-3p0 windu ponda.</p>
        </div>

        <img src="./images/Will-on-boulder.jpg" alt="Will and his dog on a boulder" className="about-me__img" />
    </section>


    {/* <!----- My Work -----> */}
    <section className="my-work" id="work">
        <h2 className="section__title">My Work</h2>
        <p className="section__subtitle section__subtitle--my-work">A selection of some of my projects</p>

        <div className="portfolio">
            {/* <!--portfolio item 01--> */}
            <div className="portfolio__item">
                <div className="portfolio__item-text">
                    <h3 className="portfolio__item-title">Climate Comparison App</h3>
                    <p className="portfolio__item-description">React application that enables the user to search and compare climates between two locations. Dark and light themes are implemented.</p> 
                    <div className="links">
                        <a href="https://climate-comparison-app.netlify.app/"  target="_blank" className="btn portfolio__item-btn">view live</a>
                        <a href="https://github.com/willcary/climate-comparison-app"   target="_blank" className="btn portfolio__item-btn">source code</a>
                    </div>
                </div>
                <a href="https://climate-comparison-app.netlify.app/" target="_blank" className="portfolio__img--anchor">
                    <img src="./images/Climate-Comparison-App.jpg" alt="" className="portfolio__img" />
                </a>
            </div>
            {/* <!--portfolio item 02--> */}
            <div className="portfolio__item">
                <div className="portfolio__item-text">
                    <h3 className="portfolio__item-title">Coiltek</h3>
                    <p className="portfolio__item-description">Custom website made for Coil Technology, Inc. using html, css, js, and bootstrap.</p>
                    <div className="links">
                        <a href="https://www.coiltek.com/"  target="_blank" className="btn portfolio__item-btn">view website</a>
                    </div>
                </div>
                <a href="https://www.coiltek.com/" target="_blank" className="portfolio__img--anchor">
                    <img src="./images/CS-5000-product.jpg" alt="Coiltek CS-5000 loop control system" className="portfolio__img" />
                </a>
            </div>

            {/* <!--portfolio item 03--> */}
            <div className="portfolio__item">
                <div className="portfolio__item-text">
                    <h3 className="portfolio__item-title">Speed Typing Game</h3>
                    <p className="portfolio__item-description">ReactJS app that tracks how many words per minute you type and uses the
                        Window Storage API to retain your high score in localStorage</p>
                    <div className="links">
                        <a href="https://typing-words-per-minute.netlify.app/" target="_blank" className="btn portfolio__item-btn">view
                            live</a>
                        <a href="https://github.com/willcary/speed-typing-game" target="_blank"
                            className="btn portfolio__item-btn">source code</a>
                    </div>
                </div>
                <a href="https://typing-words-per-minute.netlify.app/" target="_blank" className="portfolio__img--anchor">
                    <img src="./images/speed-typing-game.JPG" alt="Speed typing game" className="portfolio__img" />
                </a>
            </div>

            {/* <!--portfolio item 04--> */}
            <div className="portfolio__item">
                <div className="portfolio__item-text">
                    <h3 className="portfolio__item-title">Pic Some App</h3>
                    <p className="portfolio__item-description">React application that allows users to favorite pictures, add them to the cart and "order". *This is not a functional store, orders are not actually placed.</p>
                    <div className="links">
                        <a href="https://pict-some.netlify.app/"  target="_blank" className="btn portfolio__item-btn">view live</a>
                        <a href="https://github.com/willcary/pic-some"   target="_blank" className="btn portfolio__item-btn">source code</a>
                    </div>
                </div>
                <a href="https://pict-some.netlify.app/" target="_blank" className="portfolio__img--anchor">
                    <img src="./images/Pic-Some-1.JPG" alt="Pic-Some app home page" className="portfolio__img" />
                </a>
            </div>
            
            {/* <!--portfolio item 05--> */}
            <div className="portfolio__item">
                <div className="portfolio__item-text">
                    <h3 className="portfolio__item-title">Responsive Resume</h3>
                    <p className="portfolio__item-description">Resume designed to be responsive to screen size and developed using html and scss.</p>
                    <div className="links">
                        <a href="https://codepen.io/WillCary/project/full/ZqxqRj"  target="_blank" className="btn portfolio__item-btn">view live</a>
                        <a href="https://codepen.io/WillCary/project/editor/ZqxqRj"   target="_blank" className="btn portfolio__item-btn">source code</a>
                    </div>
                </div>
                <a href="https://codepen.io/WillCary/project/full/ZqxqRj" target="_blank" className="portfolio__img--anchor">
                    <img src="./images/Responsive-Resume.jpg" alt="Pic-Some app home page" className="portfolio__img" />
                </a>
            </div>
            
            {/* <!--portfolio item 06--> */}
            <div className="portfolio__item">
                <div className="portfolio__item-text">
                    <h3 className="portfolio__item-title">Personal Portfolio</h3>
                    <p className="portfolio__item-description">This website was created using React and CSS. The TypeScript library, tsParticles, was used for the animated effect in the hero section.</p>
                    <div className="links">
                        <a href="https://codepen.io/WillCary/project/editor/ZqxqRj"   target="_blank" className="btn portfolio__item-btn">source code</a>
                    </div>
                </div>
                <a href="https://codepen.io/WillCary/project/full/ZqxqRj" target="_blank" className="portfolio__img--anchor">
                    <img src="./images/dog-3.jpg" alt="Pic-Some app home page" className="portfolio__img" />
                </a>
            </div>
        </div>
    </section>

    {/* <!----- Footer -----> */}
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
            <li className="social-list__item">
                <a href="https://codepen.io/WillCary" target="_blank" rel="noopener noreferrer" className="social-list__link">
                    <i className="fab fa-codepen"></i>
                    <p>CodePen</p>
                </a>
            </li>
        </ul>
    </footer>

    <script src="./js/index.js"></script>
    </>
  );
}

export default App;
