import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Yousef Defrawi</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item">
                            <a class = "nav-link" href="#about">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class = "nav-link" href="#portfolio">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class = "nav-link" href="https://github.com/ydefrawi">Github</a>
                        </li>
                        <li class="nav-item">
                            <a class = "nav-link" href="#contact">Contact Me</a>
                        </li>
                        <li class="nav-item">
                            <a class = "nav-link" href="https://www.linkedin.com/in/yousef-defrawi" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
