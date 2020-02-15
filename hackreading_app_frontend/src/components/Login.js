import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
    render() {
        return (
            <div>
                <header class="masthead d-flex">
                    <div class="container text-center my-auto">
                        <h3 class="mb-1">Login</h3><br></br>
                        <Form>
                            <Form.Group controlId="userName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="userName" placeholder="Username" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                 </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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