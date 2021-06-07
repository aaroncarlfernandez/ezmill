import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import About from './About';
import Nav from './FooterNav';

export default class Footer extends Component {
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-center about-cover" fluid>
        <About />
        <Nav />
      </Container>
    )
  }
}