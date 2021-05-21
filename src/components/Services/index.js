import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Services () {
  return (
    <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Skills</h2>
                    <h3 class="section-subheading text-muted">Some things I can do</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Front-End</h4>
                        <p class="text-muted">HTML/CSS, Javascript, using web-APIs, third Party APIs. Creating dynamic and responsive sites for optimal engagement.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Back-End</h4>
                        <p class="text-muted">Node.js, Express, MySQL, MongoDB. Writing server-side code, writing API endpoints and interacting with DBs.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Full-Stack</h4>
                        <p class="text-muted">Can work across the entire stack of technologies used in an application and create rich, dynamic, interactive applications from the ground up.</p>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Services;
