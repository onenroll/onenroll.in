import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form} from 'react-bootstrap';
import Root from '../components/imageHandler';
import Buttons from '../components/Buttons'
import { useForm } from "react-hook-form";
import './page.css'
export default function SignIn() {
    const {register,handleSubmit} =useForm() ;
    

    const onSubmit = (data)=>{console.log(data);}

    return (
        <div>
            <Container fluid>
                <Row md={6}>
                    <Col lg={7}  >
                        <div >  
                            <Root/>
                        </div>
                    </Col>
                    <Col lg={5}>

                                <h2 className ="image-heading">SignIn</h2>
                                    <p className="heading-text">New User? <span style={{ color: 'blue' }}>Create an Account</span></p>
                            <div className ="right-side">
                           
                            <Form onSubmit ={handleSubmit(onSubmit)}>
                                    <Form.Group controlId="formBasicEmail"  >
                                        <Form.Control 
                                        type="email" 
                                        placeholder="Email" 
                                        name ="Email" 
                                        ref ={register} 
                                        required 
                                        autoComplete="off"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control 
                                        type="password"
                                         placeholder="Password" 
                                         name ="Password"  
                                         ref ={register} 
                                         required autoComplete="off"/>
                                    </Form.Group>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Remember me" />
                                                </Form.Group>
                                            </Col>
                                        <Col>
                                            <Form.Text className="text-muted">
                                                 Forgot Password
                                            </Form.Text>
                                        </Col>
                                    </Row>
                                   
                                    <Buttons name ="Sign In" />
                                </Form>
                                <hr/>
                                <Buttons name ="google" />
                                <Buttons name ="facebook" />


                            
                            </div>
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}
