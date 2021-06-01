import React from 'react';
import {Navbar} from 'react-bootstrap';
import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials'

export default class Sidebar extends React.Component {
    render() {
      return (
        <aside className="l-off-canvas left-off-canvas-menu">
            <div className="l-region l-region--off-canvas">
                <Navbar id={"block-menu-block-asf-common-mm-oc"} role="navigation" className="block block--menu-block block--menu-block-asf-common-mm-oc delta--asf-common-mm-oc">
                  <h2 className="block__title animate-in">Main menu</h2>
                  <div className="menu-block-wrapper menu-block-asf_common_mm_oc menu-name-main-menu parent-mlid-0 menu-level-1">
                    <ul id="main-menu-links" className="off-canvas-list links clearfix"><Menu /></ul>
                  </div>
                </Navbar>
                <Navbar id={"block-menu-block-iga-common-socials-oc"} role="navigation" className="block block--menu-block block--menu-block-iga-common-socials-oc delta--iga-common-socials-oc">
                    <h2 className="block__title animate-in">Social Links</h2>
                    <div className="follow-socials menu-block-wrapper menu-block-iga_common_socials_oc menu-name-socials-menu parent-mlid-0 menu-level-1">
                      <Socials />
                    </div>
                </Navbar>
            </div>
        </aside>
      )
    }
  }