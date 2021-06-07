import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { personalData } from '../../data/data';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  render() {
    return (
    <Row className="d-flex flex-row">
      <ScrollAnimation animateIn="block__title animate-in">
        about
      </ScrollAnimation>
      <div className="about-text mt-4 text-center"> {personalData[0].about}</div>
    </Row>
    )
  }
}
