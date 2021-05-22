import React from "react";

function AboutMe (props) {
  return (
<div className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <br/>
                    <h2 className="section-heading text-uppercase">Who Am I?</h2>
                    <h3 className="section-subheading text-muted">A little about me</h3>
                </div>
                <div container className="text-center"> 
                    <img className = "profile-pic" src="assets/img/portfolio/profilePic.PNG" height="400px" />
                </div>
                <container className="container">
                    <div className="text-left">
                        <p>Aspiring web developer and experienced Project Manager with a demonstrated history in marketing and digital project & process management.
                        Skilled in Consulting, Business Process, E-Commerce, Digital Marketing & Analytics, and International Sourcing.</p>
                        <br/>
                        <p>I'm an enthusastic business professional with a serious passion for business, entrepreneurship and technology. In a nutshell, I like creating and improving things. Coding incorporates the best aspects of creativity and problem solving. It gives us the ability to create functional applications that solve critical problems from an empty canvas.</p>
                        <br/>
                    </div>
                </container>
                <ul className="timeline">,
                
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Education</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">
                                <ul>
                                    <li className="list-inline"><h5>University of Houston</h5></li>
                                    <li className="list-inline"><h6>Management Information Systems</h6></li>
                                    <li className="list-inline">Certificate in Entrepreneurship, Active member of Management Information Systems Student Organization (MISSO)</li>
                                </ul>
                                 </p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">First Steps</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Dabbled in Economics/Finance, Supply Chain Management, and SharePoint Administration</p>
                                <br/>
                                <ul>
                                    <li className="list-inline"><h6>Reserve Management Unit Intern</h6></li>
                                    <li className="list-inline">Central Bank of Egypt</li><br/>
                                    <li className="list-inline"><h6>Supply Chain Intern</h6></li>
                                    <li className="list-inline"><h6>SharePoint Consultant</h6></li>
                                    <li className="list-inline">Valerus</li><br/>

                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Front-End Firsts</h4>
                            </div>
                            <div className="timeline-body">
                                <h5>Project Manager / Digital Coordinator</h5>
                                <h6>Bonafide</h6>
                                <p>Managing the development, design, and content pipelines of client WordPress sites and social media accounts to establish and maintain web presence
</p><br/><p>Sourcing & directing copywriters, developers, graphic designers, and other content creators as needed
</p><br/><p>Implementing Search Engine Optimization strategies to increase web traffic to client sites and microsites
</p><br/><p>Creating visuals and marketing materials with a variety of tools including Adobe Photoshop, Illustrator, & Premiere,</p></div>

                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>May 2021</h4>
                                <h4 className="subheading">UT Austin Full-Stack Bootcamp</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Details Here</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                The
                                <br/>
                                Future
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
</div>
  );
}

export default AboutMe;