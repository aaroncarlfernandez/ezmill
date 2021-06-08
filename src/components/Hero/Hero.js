import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import Image1 from '../../img/ezm_album_e.png';

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
        <Image src={Image1} className="backgroundImage" />
      </div>
    )
  }
}
