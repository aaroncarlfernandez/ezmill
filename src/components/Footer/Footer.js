import React, { Component } from 'react';
import About from './About';
import Nav from './FooterNav';

export default class Footer extends Component {
  render() {
    return (
        <footer id={"footerSection"} className="l-footer animate-in l-about-bg" role="contentinfo">
            <About />
            <Nav />
        </footer>
    )
  }
}