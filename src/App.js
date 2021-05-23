import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Contact from "./components/Contact/Contact";
import './styles.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Discover} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
