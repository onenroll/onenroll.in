import React, { useState } from 'react'

import Root from '../../components/imageHandler'
import Buttons from '../../components/Buttons'

import SocailButton from '../../components/socialButtons';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../page.css'
import './createA.css'

import { FaEye,FaEyeSlash,FaGoogle,FaFacebookF} from 'react-icons/fa';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import RegistrationForm from './testForm';





function CreateAccount() {
    const { register, handleSubmit, errors } = useForm();
    const [icon,setIcon] = useState(<FaEyeSlash className ="icon" size ={20} />);
    const [cicon,setCIcon] = useState(<FaEyeSlash className ="icon" size ={20} />);

    const [passwordShown, setPasswordShown] = useState(false);
    const [confrimpasswordShown, setConfirmPasswordShown] = useState(false);

    
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        setIcon(passwordShown?<FaEyeSlash className ="icon" size ={20} />:<FaEye className ="icon" size ={20}/>)
      };
      const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confrimpasswordShown ? false : true);
        setCIcon(confrimpasswordShown?<FaEyeSlash className ="icon" size ={20} />:<FaEye className ="icon" size ={20}/>)
      };
    const onSubmit = (data )=>{
        console.log(data);
        if(data.FirstName.length()===0){alert("Fuck you")}
        if(data.Password !== data.ConfirmPassword) 
        {
            console.log("Password Do not Match");
        }
    }  
 

    return (
        <div>
            <Container fluid>
                <Row md={6} noGutters={true}>
                    <Col lg={6} no  >
                        <div >  
                            <Root/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className ="form-signin right-side ">
                            <h2 className ="image-heading ca">Create Account</h2>
                           
                            <p className="heading-text">Already have an account? <span style={{ color: 'blue' }}>SignIn</span></p>
                            <RegistrationForm/>
                    
                        
                        <h6><span>OR</span></h6>
                        <SocailButton/>
                        </div>
                    </Col>
                </Row>

            </Container>
            
            
        </div>
    )
}


export default CreateAccount
