import React from 'react'
import Root from '../components/imageHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import '../styles.css'
import Images from '../components/images';
import Buttons from '../components/Buttons';


// Used React-responsive to check whether the user is uing a desktop or mobile. To render it on basis of that.


function ResetPassword() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      });
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })  
    return (
        <div>
        {/* Following code is for desktop users */}
            {isDesktopOrLaptop && <>
         <div>
         <Container fluid>
                <Row md={6}>
                    <Col lg={7}  >
                        <div >  
                            <Root/>
                        </div>
                    </Col>
                    <Col lg={5}>

                                <h2 className ="image-heading">Reset Password</h2>
                                    <p className="heading-text">Set a new password for your account</p>
                            <div className ="right-side">
                                <Images name ="resetPassword"/>
                                  <p className ="imageText">
                                  Enter your new password. Use atleast 8 characters and 
                                  include mixture of both upper and lower case characters, 
                                  numbers and special characters to create a strong password.
                                  </p>
                                  <Buttons name ="Reset Password"></Buttons>
                           
                            </div>
                    </Col>
                </Row>

            </Container>
       

            
        </div>
    

        </>}
{/* Follwing code is for mobile users  */}
        {isTabletOrMobileDevice && <>
            <div>
            <Container fluid>
                <Row md={6}>
                    <Col lg={7}  >
                        <div >  
                            <Root/>
                        </div>
                    </Col>
                    <Col lg={5}>

                                <h2 className ="image-heading">Reset Password</h2>
                                    <p className="heading-text">Set a new password for your account</p>
                            <div className ="right-side">
                                <Images name ="resetPassword"/>

                           
                            </div>
                    </Col>
                </Row>

            </Container>
            
           

            
        </div>

        </>}
        </div>
        
    )
       
}

export default ResetPassword
