import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">LOGO</a>
          </div>
          <div className="social">

            <a href="https://twitter.com/astroianu" title="Follow for updates!" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>

          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>The internet. Changed forever.</h1>
            <p>Hypere Browser is the future of web brosing. The first web browser that actually listens to it's user's requests. Press the button down below to shoot us an email with your feature request.</p>
          </div>
          <a href="mailto:astroianu530@gmail.com">
            <div className="cta">Submit feature request</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;