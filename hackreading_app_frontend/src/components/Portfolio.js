import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section class="content-section" id="portfolio">
                    <div class="container">
                        <div class="content-section-heading text-center">
                            <h3 class="text-secondary mb-0">Highlights</h3>
                            <h2 class="mb-5">Recent Notes Added</h2>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="/">
                                    <span class="caption">
                                        <span class="caption-content">
                                            <h2>Zero to One</h2>
                                            <p class="mb-0">Peter Thiel's classic must-read for all entrepreneurs</p>
                                        </span>
                                    </span>
                                    <img class="img-fluid" src="./Bootstrap/img/portfolio-1.jpg" alt="" />
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="/">
                                    <span class="caption">
                                        <span class="caption-content">
                                            <h2>The Intelligent Investor</h2>
                                            <p class="mb-0">The go-to book for all looking to invest</p>
                                        </span>
                                    </span>
                                    <img class="img-fluid" src="./Bootstrap/img/portfolio-2.jpg" alt="" />
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="/">
                                    <span class="caption">
                                        <span class="caption-content">
                                            <h2>The Innovator's Dilemna</h2>
                                            <p class="mb-0">Clayton Christensen's best seller that will change the way you run
                  businesses</p>
                                        </span>
                                    </span>
                                    <img class="img-fluid" src="./Bootstrap/img/portfolio-3.jpg" alt="" />
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="/">
                                    <span class="caption">
                                        <span class="caption-content">
                                            <h2>Man's Search for Meaning</h2>
                                            <p class="mb-0">Food for thought as we re-examine our lives.</p>
                                        </span>
                                    </span>
                                    <img class="img-fluid" src="./Bootstrap/img/portfolio-4.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;


