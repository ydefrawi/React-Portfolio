import React, { Component } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioGrid from "../components/PortfolioGrid";

// console.log(Hero)

function Home (){

    return (
        <div>
            <Hero/>
            <Services/>
            <PortfolioGrid/>
        </div>
    )

}

export default Home;
