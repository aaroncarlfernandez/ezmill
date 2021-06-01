import React, { Component } from 'react';
import $ from 'jquery'

import Header from  './components/Header/Header';
import Sidebar from  './components/Header/Sidebar';
import Hero from './components/Hero/Hero';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {

  render() {
    onViewport(".block__title", "animate-in", 800, function() {});
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

function onViewport(el, elClass, offset, callback) {
  let didScroll = false;
  let this_top;
  let top;

  if(!offset) { offset = 0; }
 
  $(window).on('scroll',(function() {
      didScroll = true;
  }));
 
  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();
 
      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
 
        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);
 
          if (typeof callback == "function") callback(el);
        } 
      });
    }
  }, 100);
}

export default App;

