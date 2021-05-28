import React, { Component } from 'react';

import NavBar from  './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="l-page-wrapper inner-wrap">
        <NavBar />
        <Hero /> 
        <About />
      </div>
    );
  }
}

export default App;

