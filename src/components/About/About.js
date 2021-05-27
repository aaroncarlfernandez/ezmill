import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <div class="l-footer animate-in l-about-bg">
        <div class="l-region l-region--footer">
          <div id="mailing-list" className="block block--dotmailer-rest-webform mailing-list delta--dm-mailing-list">
              <h2 class="block__title animate-in">About</h2>
              <div class="block__content">
                  <div id="webform-client-form-wrapper-21">
                      <div>
                          <div class="umg-disclaimer et-umg-disclaimer">By submitting this form, you agree to the <a href="http://privacypolicy.umusic.com/" target="_blank" data-text="Universal Music Group Privacy Policy">Universal Music Group Privacy Policy</a>.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
