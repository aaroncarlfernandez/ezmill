import React from 'react';
import {Navbar} from 'react-bootstrap';
import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';
import Headroom from 'react-headroom'

export default class Header extends React.Component {

  render() {
    
    return (
        <header className="l-header">
            <section className="l-header-top">
                <Headroom style={{ background: '#fff' }}
                    pinStart={2000}
                    disableInlineStyles
                >
                    <Navbar className="l-navigation top-bar" role="navigation" data-topbar>
                        <div className="l-branding">
                            <h1 className="site-name">
                                <a href="/" title="Home" aria-label="Home" rel="home">Ez Mil</a>
                            </h1>
                        </div>
                        <ul className="left">
                            <li>
                                <a className="left-off-canvas-toggle off-canvas-toggle menu-icon" title="Menu" aria-label="Menu" href="#off-canvas" onClick={()=>{(document.getElementById('page').classList.contains('move-right')) ? document.getElementById('page').classList.remove("move-right") : document.getElementById('page').classList.add("move-right") }}>
                                    <span></span>
                                    <span>Menu</span>
                                    <span></span>
                                </a>
                            </li>
                        </ul>

                        <div className="l-region l-region--navigation">
                            <Navbar id="block-menu-block-asf-common-mm-nav" role="navigation" className="block block--menu-block block--menu-block-asf-common-mm-nav delta--asf-common-mm-nav">
                                <div className="menu-block-wrapper menu-block-asf_common_mm_nav menu-name-main-menu parent-mlid-0 menu-level-1">
                                    <ul className="menu">
                                        <Menu />
                                    </ul>
                                </div>
                            </Navbar>

                            <Navbar id="block-menu-block-iga-common-socials-nav" role="navigation" className="block block--menu-block block--menu-block-iga-common-socials-nav delta--iga-common-socials-nav">
                                <h2 className="block__title animate-in">Social Links</h2>
                                <div className="follow-socials menu-block-wrapper menu-block-iga_common_socials_nav menu-name-socials-menu parent-mlid-0 menu-level-1">
                                    <Socials />
                                </div>
                            </Navbar>
                        </div>
                    </Navbar>
                </Headroom>
            </section>
        </header>

        // <header className="l-header">
        //     <section className="l-header-top">
        //         <div id={'navbar-banner'} className="l-banner">
        //             <div className="sticky animated slideDown headroom--top l-banner">
        //                 <Navbar className="l-navigation top-bar" role="navigation" data-topbar>
        //                     <div className="l-branding">
        //                         <h1 className="site-name">
        //                             <a href="/" title="Home" aria-label="Home" rel="home">Ez Mil</a>
        //                         </h1>
        //                     </div>
        //                     <ul className="left">
        //                         <li>
        //                             <a className="left-off-canvas-toggle off-canvas-toggle menu-icon" title="Menu" aria-label="Menu" href="#off-canvas" onClick={()=>{(document.getElementById('page').classList.contains('move-right')) ? document.getElementById('page').classList.remove("move-right") : document.getElementById('page').classList.add("move-right") }}>
        //                                 <span></span>
        //                                 <span>Menu</span>
        //                                 <span></span>
        //                             </a>
        //                         </li>
        //                     </ul>

        //                     <div className="l-region l-region--navigation">
        //                         <Navbar id="block-menu-block-asf-common-mm-nav" role="navigation" className="block block--menu-block block--menu-block-asf-common-mm-nav delta--asf-common-mm-nav">
        //                             <div className="menu-block-wrapper menu-block-asf_common_mm_nav menu-name-main-menu parent-mlid-0 menu-level-1">
        //                                 <ul className="menu">
        //                                     <Menu />
        //                                 </ul>
        //                             </div>
        //                         </Navbar>

        //                         <Navbar id="block-menu-block-iga-common-socials-nav" role="navigation" className="block block--menu-block block--menu-block-iga-common-socials-nav delta--iga-common-socials-nav">
        //                             <h2 className="block__title animate-in">Social Links</h2>
        //                             <div className="follow-socials menu-block-wrapper menu-block-iga_common_socials_nav menu-name-socials-menu parent-mlid-0 menu-level-1">
        //                                 <Socials />
        //                             </div>
        //                         </Navbar>
        //                     </div>
        //                 </Navbar>
        //             </div>
        //         </div>
        //     </section>
        // </header>
    );
  }
}