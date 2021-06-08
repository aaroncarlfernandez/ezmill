import React, { Component } from 'react';
import Header from  './components/Header/Header';
import Sidebar from  './components/Header/Sidebar';
import Hero from './components/Hero/Hero';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Error from './components/Error/Error';
import About from './components/About/About';

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import './App.css';

class App extends Component {

  render() {
    return (
        <Router>
          <div id={"page"} className="off-canvas-wrap l-page has-no-sidebars">
            <Sidebar />
            <div className="l-page-wrapper inner-wrap">
              <Header />
              <Switch>
                  <Route exact path="/" component={Hero}/>
                  <Route exact path="/music" component={Music}/>
                  <Route exact path="/videos" component={Videos}/>
                  <Route exact path="/about" component={About}/>
                  <Route component={Error}/>
              </Switch>
            </div>

          </div>  
        </Router>
    );
  }
}

export default App;

