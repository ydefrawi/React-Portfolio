import React, { Component } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
import PortfolioGrid from "../components/PortfolioGrid";

// console.log(Hero)

function Home (){

    return (
        <container>
            <Hero/>
            <Services/>
            <PortfolioGrid/>
            <AboutMe/>
            </container>
    )

}

export default Home;
