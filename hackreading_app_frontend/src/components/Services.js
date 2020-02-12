import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <section class="content-section bg-primary text-white text-center" id="services">
                    <div class="container">
                        <div class="content-section-heading">
                            <h3 class="text-secondary mb-0">Features</h3>
                            <h2 class="mb-5">What We Offer</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <span class="service-icon rounded-circle mx-auto mb-3">
                                    <i class="icon-screen-smartphone"></i>
                                </span>
                                <h4>
                                    <strong>Responsive</strong>
                                </h4>
                                <p class="text-faded mb-0">We support multi-device user experiences</p>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <span class="service-icon rounded-circle mx-auto mb-3">
                                    <i class="icon-pencil"></i>
                                </span>
                                <h4>
                                    <strong>NLP-enhanced</strong>
                                </h4>
                                <p class="text-faded mb-0">We use NLP to analyze, summarize and translate your notes instantly</p>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                                <span class="service-icon rounded-circle mx-auto mb-3">
                                    <i class="icon-like"></i>
                                </span>
                                <h4>
                                    <strong>Collaborative</strong>
                                </h4>
                                <p class="text-faded mb-0">We support real-time collaborative editing</p>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <span class="service-icon rounded-circle mx-auto mb-3">
                                    <i class="icon-mustache"></i>
                                </span>
                                <h4>
                                    <strong>Assistive Technology</strong>
                                </h4>
                                <p class="text-faded mb-0">We provide text-to-speech capabilities for special needs users</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services;