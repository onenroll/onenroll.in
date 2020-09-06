import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Root from '../components/imageHandler';
import Buttons from '../components/Buttons'
import Images from '../components/images';

function ForgotPassword() {
    
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

                                <h2 className ="image-heading">Forgot Password</h2>
                                    <p className="heading-text">Dont worry happens to best of us</p>
                            <div className ="right-side">
                                <Images name ="forgotPassword"/>
                                    <p className ="ImageText">Enter the email address or mobile number associated with your account. 
                                    We will send you a verification code to reset your password.</p>
                            <Buttons name ="Forgot Password" />
                            
                            </div>
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}

export default ForgotPassword
