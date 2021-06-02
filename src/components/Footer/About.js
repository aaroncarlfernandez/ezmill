import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { personalData } from '../../data/data';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  render() {
    return (
      <div className="l-region l-region--footer l-page-node-l-region-footer">
        <Container id={'aboutSection'}>
            <Row className="d-flex flex-row justify-content-center">
              <ScrollAnimation animateIn="block__title animate-in">
                about
              </ScrollAnimation>
              <div className="about-text mt-4"> {personalData[0].about}</div>
            </Row>
          </Container>
      </div>
    )
  }
}
