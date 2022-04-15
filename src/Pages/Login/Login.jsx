import React, { useState } from 'react';
import { Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import logo from '../../img/logos/logo2.png';
import Loading from '../../Shared/Loading/Loading';
import './Login.css';
const Login = () => { 
    const [remember, setRemember] = useState(false)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    if(user){
        navigate('/');
    }
    if(loading){
        return <Loading/>
    }
    const handleSubmission = (e) => {
        
        e.preventDefault();

        // value that are needed for login

        const email = e.target.email.value;
        const passWord = e.target.password.value;
        
        if(email && passWord){
            signInWithEmailAndPassword(email,passWord);
        }
        
    }
    return (
        <div className='login'>
           <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth:'400px'}}>
                    <Card className='px-3 py-4 border-0'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <img src={logo} alt=""  width='200px' />
                            </Card.Title>
                            <Form onSubmit={handleSubmission} className='my-5'>
                                <FloatingLabel
                                    controlId="formBasicEmail"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control name='email' type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicPassword"
                                    label="Password"
                                    className="mb-3"
                            >
                                    <Form.Control name='password' type="password" placeholder="1234567890" />
                                </FloatingLabel>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check onClick={()=>setRemember(!remember)} type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Form.Control disabled={!remember} type="submit" value='Login'/>
                                <p className='text-center my-3'>
                                    <Link className='text-pink' to={'/sign-up'}>Don't Have An Account</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div> 
    );
};

export default Login;