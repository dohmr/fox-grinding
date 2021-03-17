import React from 'react'
import Photo from "../tommy.jpg"

function AboutMe() {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Photo} alt="Pic of Grinder" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">Tom Grinder</h1>
                    <h3>D&F Foreman</h3>


                    <div className="p-block">
                        <p>I'm Tom Grinder. A family-man first, and a handy-man by profession.</p>
                        <p>I have 10 years of experience throughout all aspects of construction and water-restoration processes.</p>
                        <p>I love my community and my family, which drives me to succeed in all that I do, be that projects or hobbies.</p>
                        <p>Creating and restoring are a few of my passions.</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutMe
