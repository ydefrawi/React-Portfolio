import React from "react";
import { Link } from "react-router-dom";
import QueueAnim from 'rc-queue-anim';

import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Services () {
  return (
   

    <section className="page-section" id="services">
     <QueueAnim delay={300} className="queue-simple">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">Some things I can do</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Front-End</h4>
                        <p className="text-muted">HTML/CSS, Javascript, using web-APIs, third Party APIs. Creating dynamic and responsive sites for optimal engagement.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Back-End</h4>
                        <p className="text-muted">Node.js, Express, MySQL, MongoDB. Writing server-side code, writing API endpoints and interacting with DBs.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Full-Stack</h4>
                        <p className="text-muted">Can work across the entire stack of technologies used in an application and create rich, dynamic, interactive applications from the ground up.</p>
                    </div>
                </div>
            </div>
            </QueueAnim>
        </section>  
  );
}

export default Services;
