import React from 'react';

export default class Menu extends React.Component {
    render() {
      return (
          <>
            <li className="first leaf menu-mlid-708"><a href="#musicSection">Music</a></li>
            <li className="leaf menu-mlid-2226"><a href="#videosSection">Videos</a></li>
            <li className="last leaf active menu-mlid-45181"><a href="#aboutSection" className="active">About</a></li>
          </>
      )
    }
  }