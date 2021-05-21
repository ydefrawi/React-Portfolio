import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <header class="masthead fadeIn hero">
    <div class="container" id='bg'>
        <div class="masthead-subheading">My name is Yousef</div>
        <div class="masthead-heading text-uppercase">LET'S MAKE SOMETHING</div>
        <a class="btn btn-info btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
    </div>
</header>
  );
}

export default Hero;
