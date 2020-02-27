import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            currentUser: ""
        };
    }
    // HandleChange & handleSubmit
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // fetch("http://localhost:3004/sessions", {
        fetch("http://hackreadingapi.herokuapp.com/sessions", {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(loggedInUser => {
                return loggedInUser.json();
            })
            .then(jsonedUser => {
                console.log("supposed to be true:", jsonedUser)
                Cookies.set('userId', jsonedUser._id)
                Cookies.set('username', jsonedUser.username, { expires: 1 })
                Cookies.set('isLoggedIn', true);
                this.setState({
                    currentUser: jsonedUser
                });
                console.log("Current User is:", this.state.currentUser);
            })
            .then(() => {
                window.location.href = "/notes";
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <header class="masthead d-flex">
                    <div class="container text-center my-auto">
                        <h3 class="mb-1">Login</h3><br></br>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text"
                                    name="username"
                                    id="username"
                                    value={this.state.username}
                                    onChange={this.handleChange} placeholder="Username" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                 </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>

                    </div>
                    <div class="overlay"></div>
                </header>
            </div>
        )
    }
}

export default Login;