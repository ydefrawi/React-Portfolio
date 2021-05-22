import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function PortfolioGrid () {
  return (
    <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">View more details about each project below!</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/FreelancR-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Freelance Platform</div>
                                <div className="portfolio-caption-subheading text-muted">Javascript/Node/MySQL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/employeeTracker-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Employee Tracker</div>
                                <div className="portfolio-caption-subheading text-muted">Node, MySQL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/weather-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Weather Dashboard</div>
                                <div className="portfolio-caption-subheading text-muted">3rd-Party APIs, dynamic HTML</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/fitness-thumbnail.jpg?raw=true" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Fitness Tracker</div>
                                <div className="portfolio-caption-subheading text-muted">MongoDB, Express</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/Terminal-thumb.jpg?raw=true" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">README  Generator</div>
                                <div className="portfolio-caption-subheading text-muted">Javascript, Node</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/ydefrawi/My-Portfolio/blob/main/assets/img/portfolio/06-thumbnail.jpg?raw=true" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Bunnies</div>
                                <div className="portfolio-caption-subheading text-muted">Javascript</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
  );
}

export default PortfolioGrid;
