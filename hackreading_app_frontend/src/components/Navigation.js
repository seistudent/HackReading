import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <a class="menu-toggle rounded" href="#">
                    <i class="fas fa-bars"></i>
                </a>
                <nav id="sidebar-wrapper">
                    <ul class="sidebar-nav">
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
                </nav>
            </div>

        )
    }
}

export default Navigation;


