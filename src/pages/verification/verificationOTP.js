import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col ,Form,Button} from 'react-bootstrap';
import Root from '../../components/imageHandler';
import {MdError} from 'react-icons/md';
import Images from '../../components/images';
import { useForm } from "react-hook-form";
import './verification.css'
import '../page.css'
function VerificationOTP() {
    const {register,handleSubmit} =useForm() ;
    const [otp,setOTP] = useState(new Array(6).fill(''));

    const verigy = 423456;

    let error = 0;
    const verifyOTP =  (otp)=>{
           var u =   otp.join('') ;

           if(u.length == 6)
           {
               if(u!= verigy)
               {
                   error  = 1;
               }

              
           }
         }

    const handleChange = (element,index)=>{
        if(isNaN(element.value)) return false;

        setOTP([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
        

    }

    return (
        <div>
            <Container fluid>
                <Row md={6}>
                    <Col lg={6}  >
                        <div >  
                            <Root/>
                        </div>
                    </Col>
                    <Col lg={6} c>
                    
                            <h2 className ="image-heading">Verification </h2>    
                            <p className="heading-text">One step away from activating your account.</p>
                            <div className ="right-side otp-screen">
                                <Images name ="verification"/>
                                    <p className ="ImageText">Enter the verfication code you received in your registered email address.</p>
                                       
                                        {
                                            otp.map((data,index)=>{
                                                return (
                                                    <input
                                                        className ="otp"
                                                        maxLength ="1"
                                                        type = "text"
                                                        name = "otp"
                                                        key ={index}
                                                        value={data}
                                                        onChange = {e=>handleChange(e.target,index)}
                                                        onFocus = {e=>e.target.select()}
                                                        required
                                                    />
                                                );
                                            })

                                            
                                            
                                        } 
                                        {error == 1 ?<p className ="error"><MdError/>Invalid OTP</p>:""}
                                        <Button type="submit"  className = "button otp-button"  onClick={verifyOTP(otp)}>Verify </Button> {' '}   <br/>
                                         <p className ="rememberdPassword">I didn’t receive the verification code.<a style={{ color: 'blue' }} href ="#">Resend</a></p>
                                         

                           
                            
                            </div>
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}

export default VerificationOTP
