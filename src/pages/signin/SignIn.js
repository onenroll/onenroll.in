import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form ,Button} from 'react-bootstrap';
import Root from '../../components/imageHandler';
import Buttons from '../../components/Buttons'
import { useForm } from "react-hook-form";

import '../page.css'
import './signinSTyles.css'
import { FaEye,FaEyeSlash} from 'react-icons/fa';
import SocailButton from '../../components/socialButtons';
import SignInSide from './signinside';

export default function SignIn() {
    const {register,handleSubmit,errors} =useForm() ;
    
    



    

    const onSubmit = (data)=>{console.log(data);}
    //TODO:-Leave margin of 16px on both side in desktop view

    
    return ( 
        <div>
            <Container fluid>
                <Row md={6}>
                    <Col lg={6} className="whole-right-side" >
                        <div  >  
                            <Root/>
                        </div>
                    </Col>
                    <Col lg={6}>
                    {/* <div className ="form-signin right-side ">
                                <h2 className ="image-heading ca">SignIn </h2>
                                <p className="heading-text">New User? <span style={{ color: 'blue' }}>Create an Account</span></p>
                            <div className ="right-side">
                            
                            <Form onSubmit ={handleSubmit(onSubmit)}>
                                <Row>
                                <Col lg={12} xs ={12}>
                                <Form.Group controlId="formBasicEmail"  >
                                        <Form.Control
                                        className ="email-feild"
                                        type="email" 
                                        placeholder="Email" 
                                        name ="Email" 
                                        ref={register({
                                                required: "Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                }})}
                                        
                                        autoComplete="off"/>
                                        {errors.email && <p>Invalid email address</p>}
                                       
                                    </Form.Group>
                                </Col>
                                <Col lg={12} xs ={12}>
                                     
                                <div>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control 
                                        style ={{padding:"23px"}} 
                                        className ="password-feild"
                                        type={passwordShown ? "text" : "password"}
                                         placeholder="Password" 
                                         name ="Password"  
                                         ref ={register} 
                                         required 
                                         autoComplete="off"
                                         />
                                         <span onClick ={togglePasswordVisiblity}> {icon}</span>
                                         
                                         
                                    </Form.Group>
                                    </div>
                                </Col>
                                   <Row className ="remainder-text">
                                            <Col xs ={6} lg={6}>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" className="rb" label="Remember me" style ={{float :"left"}}/>
                                                </Form.Group>
                                            </Col>
                                        <Col xs ={6} lg={6}>
                                            <Form.Text className="fp" style ={{float :"inline-end"}}>
                                                 Forgot Password?
                                            </Form.Text>
                                        </Col>
                                    </Row>
                                    <Col xs ={12} lg={12}>
                                    <Button  type="submit" id="signin-button"  className = "button" >Sign In</Button> {' '}  
                                     </Col>
                                   
                                    </Row>
                                </Form>
                                <h6><span>OR</span></h6>
                               </div>
                            <SocailButton/> 
                            </div> */}
                            {/* <SignInSide /> */}
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}
