import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
      return (
          <>
            <li className="first leaf menu-mlid-708"><NavLink to="/music">Music</NavLink></li>
            <li className="leaf menu-mlid-2226"><NavLink to="/videos">Videos</NavLink></li>
            <li className="last leaf active menu-mlid-45181"><NavLink to="/about">About</NavLink></li>
          </>
      )
    }
  }