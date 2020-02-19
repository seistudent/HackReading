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
import NotesView from './components/NotesView.js'
import NotesEdit from './components/NotesEdit.js'
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
      selectedNote: "",
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
                <React.Fragment currentUser={this.state.currentUser} >
                  <Notes currentUser={this.state.currentUser} />
                  {/* <NotesView currentUser={this.state.currentUser} /> */}
                </React.Fragment>
              ) : (
                  <Redirect to="/login" userState={this.userState} />
                )}
            </Route>

            <Route exact path="/sessions">
              <SignUp />
            </Route>

            <Route exact path="/notesedit" render={(props) => <NotesEdit {...props} currentUser={this.state.currentUser} />} />


          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
