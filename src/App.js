// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';

import NavBar from  './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Greetings from './components/Greetings';
import Showcase from './components/Showcase';
import {Reminder} from './components/Greetings';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="l-page-wrapper inner-wrap">
        <NavBar />
        <Greetings />
        <Reminder />
        <Showcase />
        {/* <Hero /> */}
        {/* <About /> */}
      </div>
    );
  }
}

export default App;

