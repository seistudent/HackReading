import React, { Component } from 'react';
import Notes from './components/Notes.js'
import Navigation from './components/Navigation.js'
import Header from './components/Header.js'
import About from './components/About.js'
import Services from './components/Services.js'
import CallOut from './components/CallOut.js'
import Portfolio from './components/Portfolio.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>

            <Route exact path="/">
              <Header />
              <About />
              <Services />
              <CallOut />
              <Portfolio />
            </Route>

            <Route exact path="/users">
              <Login />
            </Route>

            <Route exact path="/notes">
              <Notes />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
