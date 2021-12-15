import React from 'react'
import './../css/intro.css'
import introImg from '../images/LakeG.jpg'

function Intro() {
    return (
        <section className="intro" id="home">
            <div className="intro__background">
                <h1 className="section__title section__title--intro">Hi, I'm <strong>Will Cary</strong></h1> 
                <p className="section__subtitle section__subtitle--intro">front-end developer</p>
                <img src={introImg} alt="Will Cary portrait with his dog" className="intro__img" />
            </div>
        </section>
    )
}

export default Intro
