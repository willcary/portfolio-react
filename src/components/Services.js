import React from 'react'
import './../css/services.css'

function Services() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">Services</h2>
            <div className="services">
                <div className="service service-1">
                    <h3>Websites</h3>
                    <p>I have experience making responsive web sites for clients from scratch and with external libraries like Bootstrap. I enjoy bringing ideas to life and making modern, functional websites.</p>
                </div>
                <div className="service service-2">
                    <h3>Web Apps</h3>
                    <p>Recently I've been diving into React and like writing modular, maintainable code to create interactive web apps. I'm particularly fond of using data and determining the most effective way to display that data for the user.</p>
                </div>
                <div className="service service-3">
                    <h3>Design & Accessibility</h3>
                    <p>I love creating clear, effective and attractive UIs that follow accessibility standards. I also have experience altering existing sites to be WCAG compliant.</p>
                </div>
            </div> 
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}

export default Services
