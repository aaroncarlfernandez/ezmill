import React, { Component } from 'react'


export default class Main extends Component {
  render() {
    return (
      <div className="l-banner animate-in">
        <div className="l-region l-region--banner bolero-banner--slick slick-initialized slick-slider">
            <div className="slick-list draggable" tabIndex="0">
                <div className="slick-track">

                </div>
            </div>
            <button type="button" className="slick-prev" data-role="none"></button>
            <button type="button" className="slick-next" data-role="none"></button>

        </div>
      </div>
    )
  }
}
