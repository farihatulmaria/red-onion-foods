import React from 'react';
import { Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import logo from '../../img/logos/logo2.png';
import Loading from '../../Shared/Loading/Loading';
import '../Login/Login.css';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);
    
    const navigate = useNavigate();

    if(loading || updating){
        return <Loading/>
    }
    if(user){
        navigate('/home')
    }
    const handleSubmission = async (e) => {
        
        e.preventDefault();

        // value that are needed for sign up

        const name = e.target.name.value;
        const passWord = e.target.password.value;
        const email = e.target.email.value;
        const confirmPassword = e.target.password.value;

        if(passWord !== confirmPassword){
            alert("Passwords didn't matched")
        }
        if(name && email && passWord){
           await createUserWithEmailAndPassword(email,passWord);
        }
        await updateProfile({ displayName: name,});
    }
    return (
        <div className='sign-up'>
           <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth:'400px'}}>
                    <Card className='px-3 py-4 border-0'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <img src={logo} alt=""  width='200px' />
                            </Card.Title>
                            <Form onSubmit={()=>handleSubmission} className='my-5'>
                                <FloatingLabel
                                    controlId="formBasicName"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control name="Name" type="text" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicEmail"
                                    label="Email"
                                    className="mb-3"
                            >
                                    <Form.Control name="email" type="email" placeholder="1234567890" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicPassword"
                                    label="Password"
                                    className="mb-3"
                            >
                                    <Form.Control name="password" type="password" placeholder="1234567890" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="formBasicPassword"
                                    label="Confirm Password"
                                    className="mb-3"
                                >
                                    <Form.Control name="confirmPassword" type="password" placeholder="1234567890" />
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