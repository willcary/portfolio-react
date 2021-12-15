import React from 'react'
import './../css/services.css'

function Services() {
    return (
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
                    <h3>Design & Accessibility Testing</h3>
                    <p>Although I do not currently use conventional designer tools (yet!), I love creating clear, effective and attractive UIs that follow accessibility standards. I also have experience altering existing sites to be WCAG compliant.</p>
                </div>
            </div> 
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}

export default Services
