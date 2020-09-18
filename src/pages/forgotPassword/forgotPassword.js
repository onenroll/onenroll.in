import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col ,Form} from 'react-bootstrap';
import Root from '../../components/imageHandler';
import Buttons from '../../components/Buttons'
import Images from '../../components/images';
import { useForm } from "react-hook-form";
import {MdError} from 'react-icons/md';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers';
import './forgot.css';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
    root: {
      height: '100vh',
    },
    
    
    form: {
      width: '100%', // Fix IE 11 issue.
      
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
  }));
  

const schema = Yup.object().shape({
    email: Yup
    .string()
    .email()
    .required("Please enter a valid Email ID"),
})

function ForgotPassword() {
    const classes = useStyles();
    const {register,handleSubmit,errors} =useForm({ resolver: yupResolver(schema)}) ;

    const onSubmitForgotPassword = (data)=>{
        let input  = data.detail;
        console.log(data);
        // if(input.includes("@") )
        // {
        //     if(emailRegex.test(input))
        //         {
        //             return null;
        //         }
        //     else{
        //         return (<p>Invaild email address</p>);
        //     }
           
        // }
       
        
       

        
      
    }
    return (
        <div>
           <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={6}><Root/></Grid>
      <Grid item xs={12} sm={8} md={6}  elevation={6} square className ="d">
                    
                            <div className ="bottom">
                                <h2 className ="image-heading">Forgot Password</h2>
                                    <p className="heading-text">Dont worry it happens to best of us</p>
                            <div className ="right-side form-signin">
                                <Images name ="forgotPassword"/>
                                    <p className ="ImageText">Enter the email address or mobile number associated with your account. 
                                    We will send you a verification code to reset your password.</p>
                                   <form  onSubmit ={handleSubmit(onSubmitForgotPassword)}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="email"
                                        label="Email Address /Phone Number"
                                        name="email"
                                        autoComplete="off"
                                        autoFocus
                                        className ="forgotPassword"
                                        inputRef ={register}
                                        error ={errors.email}
                                        helperText ={errors.email ? errors.email.message :''}
                                        />
                                        <Buttons name ="Submit"/>
                                       
                                   </form>
                                   <p className ="rememberdPassword">I remember my password.<a style={{ color: 'blue' }} href ="#">Sign in</a></p>


                           
                            
                            </div>
                            </div>
                            </Grid>
                            </Grid>
                
            
        </div>
    )
}

export default ForgotPassword
