import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Slider from "react-slick";

export default class Main extends Component {
  
  render() {
    var settings = {
      dots: false,
      infinite: true,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: false,
      cssEase: "linear"
    };


    return (
      <div className="backgroundPanel">
        <Slider {...settings}>
          <Container fluid className="hero-img-1"></Container>
          <Container fluid className="hero-img-2"></Container>
        </Slider>
      </div>
    )
  }
}
