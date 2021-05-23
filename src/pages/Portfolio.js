import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import { Sidebar } from 'primereact/sidebar';

class Portfolio extends Component {
  

  render() {
    return (
<section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">View more details about each project below!</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/FreelancR-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Freelance Platform</div>
                                <div class="portfolio-caption-subheading text-muted">Javascript/Node/MySQL</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/employeeTracker-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Employee Tracker</div>
                                <div class="portfolio-caption-subheading text-muted">Node, MySQL</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/weather-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Weather Dashboard</div>
                                <div class="portfolio-caption-subheading text-muted">3rd-Party APIs, dynamic HTML</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/fitness-thumbnail.jpg?raw=true" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Fitness Tracker</div>
                                <div class="portfolio-caption-subheading text-muted">MongoDB, Express</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/Terminal-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">README  Generator</div>
                                <div class="portfolio-caption-subheading text-muted">Javascript, Node</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/06-thumbnail.jpg?raw=true" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Bunnies</div>
                                <div class="portfolio-caption-subheading text-muted">Javascript</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    );
  }
}

export default Portfolio;
