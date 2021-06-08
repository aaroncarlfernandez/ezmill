import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import Image1 from '../../img/ezm_album_e.png';

export default class Main extends Component {
  
  render() {

    return (
      <div className="backgroundPanel">
        <Image src={Image1} className="backgroundImage" />
      </div>
    )
  }
}
