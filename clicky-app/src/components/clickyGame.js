import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
//import images from '../images';

class ClickyGame extends Component {

    // add in logic for game functionality and make this a "smart component" in order to makes each component have a state and atribute.

render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default ClickyGame;
