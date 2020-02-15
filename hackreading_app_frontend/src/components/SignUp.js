import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    Redirect,
    // Link
} from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false
        };
    }
    // HandleChange & handleSubmit
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        fetch("http://localhost:3004/users", {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(createdUser => {
                return createdUser.json();
            })
            .then(() => {
                // to toggle to true to redirect
                this.setState({
                    redirect: true
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <header class="masthead d-flex">
                    <div class="container text-center my-auto">
                        <h3 class="mb-1">Sign me up!</h3><br></br>
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
                                Create new account
                            </Button>
                        </Form>

                    </div>
                    <div class="overlay"></div>
                </header>
            </div>
        )
    }
}

export default SignUp;