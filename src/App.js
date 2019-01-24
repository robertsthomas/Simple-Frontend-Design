import React, { Component } from 'react';

//Reactstrap
import { Container } from "reactstrap";

// Components
import Navigation from './Components/Navigation/Navigation'
import VeritcalRule from './Components/VerticalRule/VerticalRule'

// Page Sections
import Hero from "./Sections/Hero/Hero";
import About from './Sections/About/About'

class App extends Component {
  render() {
    return (
      <Container fluid className='m-0 p-0'>
        <Navigation />
        <Hero />
        <VeritcalRule />
        <About />
        <div style={{color: 'white', background: 'black'}} className="footer">
          I am a footer
        </div>
      </Container>
    );
  }
}

export default App;
