import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  render() {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center height-100vh mt-5">
        <ScrollAnimation animateIn="block__title animate-in">
          404 | Page not found
        </ScrollAnimation>
      </Container>
    )
  }
}