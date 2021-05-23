import React from "react";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="/">Yousef Defrawi</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <a className = "nav-link" href="/about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className = "nav-link" href="/portfolio">Recent Work</a>
                        </li>
                        <li className="nav-item">
                            <a className = "nav-link" href="https://github.com/ydefrawi">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className = "nav-link" href="#contact-me">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className = "nav-link" href="https://www.linkedin.com/in/yousef-defrawi" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
