import React, { Component } from 'react';
import {  Container } from 'react-bootstrap';
import { personalData } from '../../data/data';
import ScrollAnimation from 'react-animate-on-scroll';
import {Image} from 'react-bootstrap';
import ImageFile from '../../img/ezm_about.png';

export default class About extends Component {
  render() {
    return (
      <Container fluid className="d-flex flex-column align-items-center justify-content-center backgroundPanel">
        <Image src={ImageFile} className="backgroundImage"/>

        <ScrollAnimation animateIn="block__title animate-in">about</ScrollAnimation>
        <div className="about-text mt-4 text-center"> {personalData[0].about}</div>
        <div className="bottom-stay">
          <h4 className="l-footer-disclaimer text-center">Developed by Aaron Carl T. Fernandez For education purposes only.</h4>
        </div>
      </Container>
    )
  }
}
