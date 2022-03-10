import React from 'react'
import './../css/about.css'

function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">About me</h2>
            <p className="section__subtitle section__subtitle--about">Developer based in Chapel Hill, NC</p>
            <div className="about-me__body">
                <p>I am a motivated developer with experience designing and implementing responsive websites and apps. I enjoy making things that are aesthetically pleasing, functional, and useful. I'm a perpetual learner. Along the way, I have earned both a B.A and M.S. in Geology, I've taught myself web development, and even taught both science and coding to 4-6th grade students for 3 years. My broad background has prepared me well to learn and think logically. However, I also thrive when prompted to produce original, inventive ideas. I find coding to be the perfect balance of logic and creativity. I'm constantly working to improve and broaden my skillset with relevant technologies.</p>
                <p>When I'm not coding, I'm usually pursuing some outdoor activity inluding trail running, hiking, mountain biking, cross country skiing, paddleboarding, etc...</p>
            </div>
            <div className="about-me__skills">
                <h3 className="about-me__skills-title">Skills</h3>
                <div className="about-me__skills-box">
                    <div className="about-me__skills-item">React</div>
                    <div className="about-me__skills-item">HTML</div>
                    <div className="about-me__skills-item">CSS</div>
                    <div className="about-me__skills-item">JavaScript</div>
                    <div className="about-me__skills-item">Git</div>
                    <div className="about-me__skills-item">ES6</div>
                    <div className="about-me__skills-item">Responsive Design</div>
                    <div className="about-me__skills-item">Bootstrap</div>
                    <div className="about-me__skills-item">SCSS</div>
                </div>
            </div>
        </section>
    )
}

export default About
