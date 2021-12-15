import React from 'react'
import introImg from '../images/LakeG.jpg'

function Intro() {
    return (
        <div className="light-background">
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">Hi, I'm <strong>Will Cary</strong></h1> 
                <p className="section__subtitle section__subtitle--intro">front-end developer</p>
                <img src={introImg} alt="Will Cary portrait with his dog" className="intro__img" />
            </section>
        </div>
    )
}

export default Intro
