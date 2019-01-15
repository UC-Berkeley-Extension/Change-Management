import React, { Component } from 'react';
import logo from './logo.svg';
import applicationIcon from './application-icon.jpg';
import leadgenIcon from './leadgen-icon.jpg';
import ctaIcon from './cta-icon.jpg';
import './Landing.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="App-intro">
          <h2>Are you making a website change that will affect one of the following?</h2>
            <Link to="/form" class="">
              <div class="options">
                <div class="option">
                  <h4> An application?</h4>
                  <img src={applicationIcon} class="icon"/>
                </div>
                <div class="option">
                  <h4> A leadgen?</h4>
                  <img src={leadgenIcon} class="icon"/>
                </div>
                <div class="option">
                  <h4> A call to action?</h4>
                  <img src={ctaIcon} class="icon"/>
                </div>
              </div>
            </Link>
        </div>
        <div className="btns">
          <Link to="/form" class="link yes-link">YES</Link>
          <Link to="/minor-change" class="link no-link">NO</Link>
        </div>
      </div>
    );
  }
}

export default Landing;
