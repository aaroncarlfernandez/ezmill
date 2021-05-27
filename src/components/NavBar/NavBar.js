import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   Nav,
//   NavItem,
//   NavLink,
//   Container
//  } from 'react-bootstrap';


export default class NavBar extends React.Component {

  render() {
    return (
      <div className="l-header">
        <nav className="l-navigation top-bar">
          <div className="l-branding">
            <h1 className="site-name">
              <a href="/">Ez Mill</a>
            </h1>
          </div>

          <ul className="left">
            <li>
              <a className="left-off-canvas-toggle off-canvas-toggle menu-icon" href="#off-canvas" aria-label="Menu" title="Menu">
                <span></span>
                <span>Menu</span>
                <span></span>
              </a>
            </li>
            <li className="divider"></li>
          </ul>

          <div className="l-region l-region--navigation">
            <nav className="block block--menu-block block--menu-block-asf-common-mm-nav delta--asf-common-mm-nav">
              <div className="menu-block-wrapper menu-block-asf_common_mm_nav menu-name-main-menu parent-mlid-0 menu-level-1">
                <ul className="menu">
                  <li className="first leaf menu-mlid-708"><a href="/">About</a></li>
                  <li className="leaf menu-mlid-2226"><a href="/">Music</a></li>
                  <li className="leaf menu-mlid-495"><a href="/">Videos</a></li>
                  {/* <li className="leaf menu-mlid-45176"><a href="/">Merch</a></li>
                  <li className="last leaf active menu-mlid-45181"><a href="/">Subscribe</a></li> */}
                </ul>
              </div>
            </nav>

            <nav className="block block--menu-block block--menu-block-iga-common-socials-nav delta--iga-common-socials-nav">
              <h2 className="block__title animate-in">Social Links</h2>
              <div className="follow-socials menu-block-wrapper menu-block-iga_common_socials_nav menu-name-socials-menu parent-mlid-0 menu-level-1">
                <ul className="menu">
                  <li className="first leaf menu-mlid-45146"><a href="https://www.facebook.com/EazyMil" aria-label="Facebook" className="icon icon-facebook follow-facebook" target="blank">"facebook"</a></li>
                  <li className="leaf menu-mlid-45156"><a href="https://www.instagram.com/ezekielmiller" aria-label="Instagram" className="icon icon-instagram follow-instagram" target="blank">"instagram"</a></li>
                  <li className="leaf menu-mlid-45171"><a href="https://open.spotify.com/artist/1IQ4CjwKkdARjL5KtYiMt4" aria-label="Spotify" className="icon icon-spotify follow-spotify" target="blank">"spotify"</a></li>
                  <li className="leaf menu-mlid-45151"><a href="https://twitter.com/ezmil27" aria-label="Twitter" className="icon icon-twitter follow-twitter" target="blank">"twitter"</a></li>
                  <li className="leaf menu-mlid-45166"><a href="https://music.apple.com/ph/artist/ez-mil/1424439211" aria-label="Apple Music" className="icon icon-apple follow-apple" target="blank">"apple music"</a></li>
                  <li className="last leaf menu-mlid-45161"><a href="https://www.youtube.com/channel/UCi0702OkDEHmFRKBwKyXPpA" aria-label="YouTube" className="icon icon-youtube follow-youtube" target="blank">"youtube"</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <ul className="right"></ul>
        </nav>
      </div>
    );
  }
}
