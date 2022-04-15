import React from 'react';
import { Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logos/logo2.png';
import '../Login/Login.css';
const SignUp = () => {
    return (
        <div className='sign-up'>
           <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth:'400px'}}>
                    <Card className='px-3 py-4 border-0'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <img src={logo} alt=""  width='200px' />
                            </Card.Title>
                            <Form className='my-5'>
                                <FloatingLabel
                                    controlId="formBasicName"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicEmail"
                                    label="Email"
                                    className="mb-3"
                            >
                                    <Form.Control type="email" placeholder="1234567890" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicPassword"
                                    label="Password"
                                    className="mb-3"
                            >
                                    <Form.Control type="password" placeholder="1234567890" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicPassword"
                                    label="Confirm Password"
                                    className="mb-3"
                                >
                                    <Form.Control type="password" placeholder="1234567890" />
                                </FloatingLabel>

                                <Form.Control type="submit" value='Sign Up'/>
                                <p className='text-center my-3'>
                                    <Link className='text-pink' to={'/login'}>Already Have An Account</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;