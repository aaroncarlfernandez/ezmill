import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import ReactPlayer from "react-player";

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      cssEase: "linear"
    };

    return (
      <Container className="d-flex flex-column align-items-center height-100vh mt-5">

        <div className="mt-5 "></div>
        <h2 className="block__title mt-5">Videos</h2>
        <Slider ref={slider => (this.slider = slider)} className="view-content bolero-slick-carousel bolero-slick-processed bolero-slick-initialized my-4"  {...settings}>

          <Row className="d-flex flex-column align-items-center" key={"mv1"}>
            <ReactPlayer url={"https://www.youtube.com/watch?v=uJSbt6cPbmA"} 
                onStart={() => { this.pause(); }}
                onPause={() => { this.play(); } }
            />
          </Row>

          <Row className="d-flex flex-column align-items-center" key={"mv2"}>
            <ReactPlayer url={"https://www.youtube.com/watch?v=_OJ_T8IzctY"} 
                onStart={() => { this.pause(); }}
                onPause={() => { this.play(); } }
            />
          </Row>

        </Slider>
      </Container>
    )
  }
}