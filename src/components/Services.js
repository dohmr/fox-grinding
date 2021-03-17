import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBrush, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faBrush, faHammer, faToilet, faGavel } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faAmazon } from '@fortawesome/free-brands-svg-icons';

function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services </h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faHammer} size="2x" /></div>
                            <h3>Carpentry</h3>
                            <p>Word work</p>
                            <p>Refinishing</p>
                            <p>Flooring</p>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faToilet} size="2x" /></div>
                            <h3>Plumbing work</h3>
                            <p>Installations</p>
                            <p>Water Damage Restoration</p>
                            <p>Remodel</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faBrush} size="2x" /></div>
                            <h3>Painting</h3>
                            <p>Interior</p>
                            <p>Exterior</p>
                            <p>Powerwash/Patch Jobs</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faGavel} size="2x" /></div>
                            <h3>Community</h3>
                            <p>Volunteer Work</p>
                            <p>Volunteer Work</p>
                            <p>Volunteer Work</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Services
