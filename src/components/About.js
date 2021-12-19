import React from 'react'
import aboutImg from '../images/Will-on-boulder.jpg'
import './../css/about.css'

function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">About me</h2>
            <p className="section__subtitle section__subtitle--about">Developer based in Chapel Hill, NC</p>
            <div className="about-me__body">
                <p>Wampa padmé sith darth mace. Calamari grievous kamino grievous qui-gon kashyyyk secura. Darth hutt kamino yavin thrawn
                leia skywalker. Skywalker zabrak mon darth. Vader kamino ben lars luke organa. Jade kessel obi-wan kenobi droid gonk
                dagobah calrissian. Kit tatooine vader c-3p0 biggs darth. Dantooine skywalker kamino luke r2-d2 hoth grievous mara solo.</p>
                <p>When I'm not coding, I'm usually pursuing some outdoor activity inluding trail running, hiking, mountain biking, cross country skiing, paddleboarding, etc...</p>
            </div>

            <img src={aboutImg} alt="Will and his dog on a boulder" className="about-me__img" />
        </section>
    )
}

export default About
