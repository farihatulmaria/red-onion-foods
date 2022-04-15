import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner d-flex'>
            <Container className='d-flex align-items-center justify-content-center'>
                <Row>
                    <Col lg={12}>
                        <div className='search-form text-center'>
                            <h1 className='my-5'>Best Food Waiting For Your Belly</h1>
                            <Form className='d-flex mx-5'>
                                <Form.Control type='text' placeholder='Search Food Items' />
                                <Button type='submit'>Search</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;