import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { preloadScript } from 'opentok-react';

import Navbar from './components/Navbar';
import Main from "./components/Main";
import Room from "./components/Room";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navbar />
            <div className="wrapper">
              <Route path="/" exact component={Main} />
              <Route path="/room/:name" component={Room} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default preloadScript(App);
