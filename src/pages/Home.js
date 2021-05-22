import React, { useRef, Component } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
import PortfolioGrid from "../components/PortfolioGrid";

//prime-react
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'



function Home() {
    const header = <img alt="Card" src='showcase/demo/images/usercard.png' />;
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>)


    return (
        <container>
            <Hero />
            <Services />
            {/* <Card
                className="p-card"
                title="Title"
                subTitle="Subtitle"
                footer={footer}
                header={header}
                style={{ marginRight: '.25em' }}>
                Card Content
            </Card> */}
            <PortfolioGrid />
            <AboutMe />
        </container>
    )

}

export default Home;
