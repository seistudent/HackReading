import React, { Component } from 'react';
import Notes from './components/Notes.js'
import Navigation from './components/Navigation.js'
import Header from './components/Header.js'
import About from './components/About.js'
import Services from './components/Services.js'
import CallOut from './components/CallOut.js'
import Portfolio from './components/Portfolio.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <About />
        <Services />
        <CallOut />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
