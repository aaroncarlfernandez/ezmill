import React, { Component } from 'react';
import Header from  './components/Header/Header';
import Sidebar from  './components/Header/Sidebar';
import Hero from './components/Hero/Hero';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {

  render() {
    return (
        <div  className="page-node-1">
          <div id={"page"} className="off-canvas-wrap l-page has-no-sidebars">
            <Sidebar />
            <div className="l-page-wrapper inner-wrap">
              <Header />
              <Hero /> 
              <div id={'musicSection'}><Music /></div>
              <div id={'videosSection'}><Videos /></div>
            </div>
          </div>  
          <Footer />
        </div> 
    );
  }
}

export default App;

