import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Contact from "./components/Contact/Contact";
import 'primeflex/primeflex.css';
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css"
import './styles.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
