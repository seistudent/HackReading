import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Navigation extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        };
    }

    render() {
        return (
            <div>
                <Menu>
                    <div class="bm-burger-button right" >
                        <li class="nav-item px-lg-4 nav-link text-uppercase text-expanded">
                            {this.props.currentUser ? (
                                <p>Welcome {this.props.currentUser.username} </p>
                            ) : (
                                    ""
                                )}
                        </li>
                        <a id="home" className="menu-item" href="/">Home</a><br></br>
                        <a id="createaccount" className="menu-item" href="/sessions">Sign Up</a><br></br>
                        <a id="login" className="menu-item" href="/login">Login</a><br></br>
                        <a id="notes" className="menu-item" href="/notes">View Notes</a><br></br>
                        {this.props.currentUser ? (
                            <a
                                id="logout" className="menu-item" href="/"
                                onClick={this.props.toLogout}
                            >
                                Logout
                  </a>
                        ) : ("")}
                        <a onClick={this.showSettings} className="menu-item--small" href="/"></a><br></br>
                    </div>
                </Menu>
                {/* <a class="menu-toggle rounded" href="/">
                    <i class="fas fa-bars"></i>
                </a>
                <nav id="sidebar-wrapper">
                    <ul class="sidebar-nav">
                        <li class="sidebar-brand">
                            {this.props.currentUser ? (
                                <li>Welcome {this.props.currentUser.username} </li>
                            ) : (
                                    ""
                                )}
                        </li>

                        <li class="sidebar-brand">
                            <a class="js-scroll-trigger" href="#page-top">Menu</a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a class="js-scroll-trigger" href="#page-top">Home</a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a class="js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a class="js-scroll-trigger" href="#createNote">Create Note</a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a class="js-scroll-trigger" href="#notesLibrary">Notes Library</a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a class="js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav> */}
            </div >

        )
    }
}

export default Navigation;


