import React, { Component } from 'react';

//Reactstrap
import { Container } from "reactstrap";

// Components
import Navigation from './Components/Navigation/Navigation'
import VeritcalRule from './Components/VerticalRule/VerticalRule'

// Page Sections
import Hero from "./Sections/Hero/Hero";
import Prices from './Sections/Prices/Prices'
import About from './Sections/About/About'
import Footer from './Sections/Footer/Footer'
import Cards from './Sections/Cards/Cards'

class App extends Component {
  render() {
    return (
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Navigation />
        <Hero />
        <Cards />
        <Container>
          <VeritcalRule />
          <About />
          <VeritcalRule />
          <Prices />
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default App;
