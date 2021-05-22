import React, { useState, setState } from "react";
import Texty from 'rc-texty';
import Animate from 'rc-animate';
import animType from 'rc-texty/lib/animTypes';

import "./style.css";

function Hero() {
  const [show, setShow] = useState(false);

  return (
    <header className="masthead fadeIn hero">
      <div className="container" id='bg'>
        {/* <button shape="circle" icon="reload" onClick={this.onClick}>BUTTON</button> */}

        <div className="masthead-subheading">My name is Yousef</div>

        <div className="masthead-heading text-uppercase">
          <Texty
            type="bounce"
            mode="smooth"
            duration="2000"

          >
            {"LET'S MAKE SOMETHING"}
          </Texty></div>

        <Animate
          transitionName="fade"
          delay="1"
          transitionAppear
        >
          {<a className="btn btn-info btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>}
        </Animate>
        
      </div>
    </header>
  )
}

export default Hero;


