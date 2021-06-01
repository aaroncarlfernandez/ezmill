import React, { Component } from 'react';
import {Nav } from 'react-bootstrap';
import Socials from '../Socials/Socials';

export default class FooterNav extends Component {
    render() {
      return (
      <Nav>
        <div className="l-region l-region--footer-nav">
          <Nav className="block block--menu-block block--menu-block-iga-common-socials-footer delta--iga-common-socials-footer" role="navigation">
            <div className="follow-socials menu-block-wrapper menu-block-iga_common_socials_footer menu-name-socials-menu parent-mlid-0 menu-level-1">
              <Socials />
            </div>
          </Nav>
          <Nav className="block block--menu-block block--menu-block-asf-common-legal-nav delta--asf-common-legal-nav mt-3" role="navigation">
            <div className="menu-block-wrapper menu-block-asf_common_legal_nav menu-name-menu-legal parent-mlid-0 menu-level-1">
              <h4 className="l-footer-disclaimer text-center">Developed by Aaron Carl T. Fernandez For education purposes only.</h4>
            </div>
          </Nav>
        </div>
      </Nav>
      )
    }
  }