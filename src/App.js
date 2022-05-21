import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGitHub } from './assets/icons/github.svg';

import "./App.css";
import logo from './assets/icons/hypere.png';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <button><img src={logo} alt="hypere logo" href="." /></button>
          </div>
          <div className="social">

            <a href="https://twitter.com/astroianu" title="Follow for updates!" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/Hypere-app" title="Our GitHub repository will always contain the most up-to-date source code of our apps." target="_blank" rel="noopener noreferrer">
              <IconGitHub className="icon" />
            </a>

          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>The internet. Changed forever. Coming late 2022</h1>
            <p>Hypere Browser will be the most intuitive and easy to use web browser. It's main focus is privacy and security.</p>
            <p>And the best part? It's completely open sourced. Check the GitHub icon in the top right corner.</p>
            <p>For the first time in the history of web browsers, you get to decide which features Hyper Browser will include. Press the button below to submit the feature request form.</p>
          </div>
          <a href="https://forms.gle/9vbhp7QbEBJFVFxT8">
            <div className="cta">Submit feature request</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;