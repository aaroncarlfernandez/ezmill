import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { musicData } from '../../data/data';

import ScrollAnimation from 'react-animate-on-scroll';

export default class Music extends Component {

  render() {

    let builtMusicContainer = musicData.map(music => {
       return musicContainer(music);
    });

    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      cssEase: "linear"
    };

    return (
      <Container className="d-flex align-items-center height-100vh mt-5">
        <Slider className="view-content bolero-slick-carousel bolero-slick-processed bolero-slick-initialized"  {...settings}>
          {builtMusicContainer}
        </Slider>
      </Container>
    )
  }
}
let musicContainer = (data) => {
  return (
    <Container fluid key={data.key}>
      <Row className="justify-content-center">
          <Col md={6}>
            <Image className="album-width" src={data.image} alt="Generic placeholder" />
          </Col>
          <Col md={6} className="my-2 d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column align-items-center">
              <Col sm={12} className="my-2">  
                <Row className="d-flex flex-column align-items-center">
                  <ScrollAnimation animateIn="block__title animate-in">
                    {data.category}
                  </ScrollAnimation>
                </Row>
              </Col>
              <Col sm={12} className="my-2">
                <Row className="d-flex flex-column align-items-center">
                  <h2 className="music-title">{data.title}</h2>
                </Row>
              </Col>
              <Col sm={12} className="my-2">
                <ScrollAnimation animateIn="fadeIn">
                  <Row className="d-flex flex-column align-items-center spotify-button">
                    <a href={data.spotifyLink} className="button spotify my-2" target="_blank" rel="noreferrer"><i className="icon icon-spotify"></i> Spotify</a>
                  </Row>
                </ScrollAnimation>
              </Col>
            </Row>
          </Col>
      </Row>
    </Container>
  )
}
