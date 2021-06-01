import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { personalData } from '../../data/data';

export default class About extends Component {
  render() {
    return (
      <div className="l-region l-region--footer l-page-node-l-region-footer">
        <Container id={'aboutSection'}>
            <Row className="d-flex flex-row justify-content-center">
              <h2 className="block__title">about</h2>
              <div className="about-text mt-4"> {personalData[0].about}</div>
            </Row>
          </Container>
      </div>
    )
  }
}
