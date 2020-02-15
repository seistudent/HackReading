import React, { Component } from 'react';

class CallOut extends Component {
    render() {
        return (
            <div>
                <section class="callout">
                    <div class="container text-center">
                        <h2 class="mx-auto mb-5">Start your Adventure!</h2>
                        <div>
                            <a class="btn btn-primary btn-xl" href="/sessions">Sign me
                            up!</a>
                            <a class="btn btn-primary btn-xl" href="/notes">Type Away!</a>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default CallOut;


