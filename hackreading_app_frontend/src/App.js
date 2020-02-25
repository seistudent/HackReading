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
import Cookies from 'js-cookie';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      selectedNote: "",
      notes: []
    };
  }
  toLogout = () => {
    Cookies.remove('userId', { path: '' });
    Cookies.remove('username', { path: '' });
    Cookies.remove('isLoggedIn', { path: '' });
  };
  render() {
    let isLoggedIn = Cookies.get('isLoggedIn');
    let username = Cookies.get('username');
    console.log("username is", username)
    let userId = Cookies.get('userId')
    return (

      < Router >
        <div className="App">
          <Navigation currentUser={username} toLogout={this.toLogout} />

          <Switch>

            <Route exact path="/">
              <Header />
              <About />
              <Services />
              <CallOut />
              <Portfolio />
            </Route>

            <Route exact path="/login">
              {isLoggedIn ? (
                <Redirect to="/notes" />
              ) : (
                  <Login />
                )}
            </Route>

            <Route exact path="/notes">
              {isLoggedIn ? (
                <React.Fragment currentUser={username} >
                  <Notes currentUser={username} />
                </React.Fragment>
              ) : (
                  <Redirect to="/login" />
                )}
            </Route>

            <Route exact path="/sessions">
              <SignUp />
            </Route>

            <Route exact path="/notesedit" render={(props) => <NotesEdit {...props} currentUser={username} />} />


          </Switch>

          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
