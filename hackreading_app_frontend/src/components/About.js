import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section class="content-section bg-light" id="about">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-lg-10 mx-auto">
                                <h2>HackReading is the perfect app to help you fulfill your long-held desire to read more widely!
                                </h2>
                                <br /><br />
                                <p class="lead mb-5">Welcome to HackReading! This is a productivity application, that helps you
                                    organise your notes and better leverage the power of reading to build knowledge.
                                </p>
                                <p class="lead mb-5">This app utilises Natural Language Processing Tools (summarization,
                                    translation), and adopts a
                                    crowd-sourced and community-curated approach (real-time collaborative editing).
                                </p>
                                <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">Learn More About HackReading</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;


