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
import SignUp from './components/SignUp.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      notes: []
    };
  }
  userState = user => {
    this.setState(
      {
        currentUser: user
      },
      () => {
        console.log("user logged in");
      }
    );
  };
  toLogout = () => {
    this.setState({
      currentUser: ""
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation currentUser={this.state.currentUser} toLogout={this.toLogout} />

          <Switch>

            <Route exact path="/">
              <Header />
              <About />
              <Services />
              <CallOut />
              <Portfolio />
            </Route>

            <Route exact path="/login">
              {this.state.currentUser ? (
                <Redirect to="/notes" />
              ) : (
                  <Login userState={this.userState} />
                )}
            </Route>

            <Route exact path="/notes">
              {this.state.currentUser ? (
                <Notes currentUser={this.state.currentUser} />
              ) : (
                  <Redirect to="/login" userState={this.userState} />
                )}
            </Route>

            <Route exact path="/sessions">
              <SignUp />

            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
