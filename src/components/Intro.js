import React from 'react'

function Intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">Hi, I'm <strong>Will Cary</strong></h1> 
            <p className="section__subtitle section__subtitle--intro">front-end developer</p>
            <img src="./images/LakeG.jpg" alt="Will Cary portrait with his dog" className="intro__img" />
        </section>
    )
}

export default Intro
