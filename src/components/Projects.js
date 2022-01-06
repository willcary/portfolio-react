import React from 'react'
import Project from './Project'
import './../css/projects.css'
import climateAppImage from '../images/Climate-Comparison-App.jpg'
import coiltekImage from '../images/CS-5000-product.jpg'
import speedTypingImage from '../images/speed-typing-game.JPG'
import picSomeImage from '../images/Pic-Some-1.JPG'
import resumeImage from '../images/Responsive-Resume.jpg'
import portfolioImage from '../images/portfolio.JPG'

function Projects() {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle section__subtitle--my-work">A selection of some of my projects</p>

            <div className="portfolio">
                {/* --------------portfolio item 01-------------- */}
                <Project 
                    title="Climate Comparison App" 
                    description="React app that compares climates between two locations by using the MapQuest geocode API and the MeteoStat API. Recharts was used to create graphs." 
                    // light and dark modes are available.
                    liveURL="https://climate-comparison-app.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/climate-comparison-app" 
                    src={climateAppImage}
                    alt="Climate Comparison App picture"
                />
                {/* --------------portfolio item 02-------------- */}
                <Project 
                    title="Coiltek Website" 
                    description="Custom website made for Coil Technology, Inc. This site was made using html, css, and bootstrap. It was deployed through bluehost." 
                    liveURL="https://www.coiltek.com/" 
                    sourceCodeURL="" 
                    src={coiltekImage} 
                    alt="Coiltek CS-5000 loop control system"
                />

                {/* --------------portfolio item 03-------------- */}
                <Project 
                    title="Speed Typing Game" 
                    description="React app that tracks how many words per minute you type and uses the Window Storage API to retain your high score in localStorage." 
                    liveURL="https://typing-words-per-minute.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/speed-typing-game" 
                    src={speedTypingImage}
                    alt="Speed typing game picture"
                />

                {/* --------------portfolio item 04-------------- */}
                <Project 
                    title="Pic Some App" 
                    description='React app that allows users to favorite pictures, add them to the cart and "order". The base of this project was made through an online course and is not a functional store.*'
                    liveURL="https://pict-some.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/pic-some" 
                    src={picSomeImage}
                    alt="Pic-Some app home page"
                />
                
                {/* --------------portfolio item 05-------------- */}
                <Project 
                    title="Responsive Resume" 
                    description="My resume, designed to be responsive to screen size and developed using html and scss. Please peruse for more information about me." 
                    liveURL="https://codepen.io/WillCary/project/full/ZqxqRj" 
                    sourceCodeURL="https://codepen.io/WillCary/project/editor/ZqxqRj" 
                    src={resumeImage}
                    alt="Picture of resume"
                />
                
                {/* --------------portfolio item 06-------------- */}
                <Project 
                    title="Personal Portfolio" 
                    description="The website you are currently viewing was created using React and CSS with BEM methodology. These project cards were made with one reusable project component." 
                    liveURL="#home" 
                    sourceCodeURL="https://github.com/willcary/portfolio-react" 
                    src={portfolioImage}
                    alt="Portfolio Site picture"
                />
            </div>
        </section>
    )
}

export default Projects
