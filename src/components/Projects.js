import React from 'react'
import Project from './Project'
import './../css/projects.css'
import leWordImage from '../images/le-word.jpg'
import coiltekImage from '../images/CS-5000-product.jpg'
import climateAppImage from '../images/Climate-Comparison-App.jpg'
import speedTypingImage from '../images/speed-typing-game.JPG'
import portfolioImage from '../images/portfolio.JPG'
import backstageTalks from '../images/backstage-talks.JPG'

function Projects() {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle section__subtitle--my-work">A selection of some of my projects</p>

            <div className="portfolio">
                {/* --------------portfolio item 01-------------- */}
                <Project 
                    title="Le Word App" 
                    description="A Wordle clone created with react that uses the Bing Spell Check API and the Random Words API. Stats are retained through localStorage." 
                    liveURL="https://leword.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/le-word-app" 
                    src={leWordImage}
                    alt="Le Word Application"
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
                    title="Climate Comparison App" 
                    description="React app that compares climates between two locations by using a geocode API and the MeteoStat Climate API. Recharts was used to create graphs." 
                    liveURL="https://climate-comparison-app.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/climate-comparison-public" 
                    src={climateAppImage}
                    alt="Climate Comparison App picture"
                />

                {/* --------------portfolio item 04-------------- */}
                <Project 
                    title="Backstage Talks" 
                    description="Recreation of the Backstage Talks website (https://backstagetalks.com/). React app that implements responsive scroll snapping and animated background-color transitions." 
                    liveURL="https://backstage-talks.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/backstage-talks" 
                    src={backstageTalks}
                    alt="Picture of recreated Backstage Talks site."
                />
                
                
                {/* --------------portfolio item 05-------------- */}
                <Project 
                    title="Speed Typing Game" 
                    description="React app that tracks how many words per minute you type and uses the Window Storage API to retain your high score in localStorage." 
                    liveURL="https://typing-words-per-minute.netlify.app/" 
                    sourceCodeURL="https://github.com/willcary/speed-typing-game" 
                    src={speedTypingImage}
                    alt="Speed typing game picture"
                />
                
                {/* --------------portfolio item 06-------------- */}
                <Project 
                    title="Personal Portfolio" 
                    description="This web app was created using React and CSS with BEM methodology. These project cards were made with one reusable project component." 
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
