import React from 'react';

import "./Login.css"

import { Row, Col, Card, Form, Button } from 'react-bootstrap'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    login = (e) => {
        e.preventDefault();
        console.log(e.target.elements.formUsername.value);
    }

    render() {
        return (
            <div className="login-background-alignment">
                <Row style={{ width: "100%" }}>
                    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="login-page-title">
                        Rate My Project
                    </Col>
                </Row>

                <Row style={{ width: "100%" }}>
                    <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                        <Card style={{ width: "100%" }}>
                            <Card.Body>
                                
                                <Form className="login-card-form rate-my-app-form" onSubmit={this.login}>
                                    <Form.Group controlId="formUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Username"
                                        />
                                        <Form.Control.Feedback type="invalid">Username is required.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant="dark" className="login-card-submit-button">
                                        Log in
                                    </Button>
                                </Form>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginPage;
