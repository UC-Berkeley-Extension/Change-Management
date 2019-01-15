import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Form from './Form/Form';
import ThankYou from './ThankYou/ThankYou';
import Oops from './Oops/Oops';
import NoChange from './NoChange/NoChange';
import UNEXlogo from './UNEX-logo.png';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={UNEXlogo} alt="Berkeley Extension Logo"/>
          <p>Change Management</p>
        </header>
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Landing}/>
            <Route path="/form" component={Form}/>
            <Route path="/minor-change" component={NoChange}/>
            {/* <Route path="/thank-you" component={ThankYou}/>
            <Route path="/oops" component={Oops}/> */}
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
