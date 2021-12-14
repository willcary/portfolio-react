import React from 'react'
import PropTypes from 'prop-types'

function Project({ title, description, liveURL, sourceCodeURL, src, alt }) {
    const designateTarget = () => {
        return liveURL.includes('#') ? "_self" : "_blank"
    }

    return (
        <div className="portfolio__item">
            <div className="portfolio__item-text">
                <h3 className="portfolio__item-title">{title}</h3>
                <p className="portfolio__item-description">{description}</p> 
                <div className="links">
                    {liveURL ? <a href={liveURL} target={designateTarget()} className="btn portfolio__item-btn">view live</a> : null}
                    {sourceCodeURL ? <a href={sourceCodeURL} target="_blank" className="btn portfolio__item-btn">source code</a> : null}
                </div>
            </div>
            <a href={liveURL} target={designateTarget()} className="portfolio__img--anchor">
                <img src={src} alt={alt} className="portfolio__img" />
            </a>
        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string, 
    description: PropTypes.string, 
    liveURL: PropTypes.string, 
    sourceCodeURL: PropTypes.string, 
    src: PropTypes.string, 
    alt: PropTypes.string
}

export default Project

