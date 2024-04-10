import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <Container className='my-5 d-flex align-items-center justify-content-center'>
                <Spinner animation="border" variant="danger" />
            </Container>
        </div>
    );
};

export default Loading;