import React from 'react'
import Root from '../../components/imageHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import './styles.css'
import Images from '../../components/images';
import Buttons from '../../components/Buttons';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';

import Link from '@material-ui/core/Link';
import * as Yup from "yup";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Used React-responsive to check whether the user is uing a desktop or mobile. To render it on basis of that.
const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const schema = Yup.object().shape({
    password: Yup.string()
                .matches(lowercaseRegex, '1 lowercase required!')
                .matches(uppercaseRegex, '1 uppercase required!')
                .matches(numericRegex, '1 number required!')
                .min(8, 'Minimum 8 characters required!')
                .required('Required!'),

    passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password')], 'Password must be the same!')
                .required('Required!'),
             
  });

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
  
  

function ResetPassword() {
    const classes = useStyles();
    const {register,handleSubmit,errors, } = useForm({  resolver: yupResolver(schema) });

    

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      });
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })  
    
      const onSubmit =(data)=>{

            console.log(data);
      }
    
   
  
    return (
     
        <div>
        {/* Following code is for desktop users */}
            {isDesktopOrLaptop && <>

         
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
                <Grid item xs={12} sm={4} md={7}><Root/></Grid>
                <Grid item xs={12} sm={8} md={5}  elevation={6} square className ="d">
                        <h2 className ="image-heading">Reset Password</h2>
                        <p className="heading-text">Set a new password for your account</p>
                                    <div className ="right-side form-signin">
                                        <Images name ="resetPassword"/>
                                        <p className ="imageText">
                                        Enter your new password. Use atleast 8 characters and 
                                        include mixture of both upper and lower case characters, 
                                        numbers and special characters to create a strong password.
                                        </p>
                                    
                                    <form className ="resetPassword" onSubmit ={handleSubmit(onSubmit)} noValidate>

                                    <TextField
                                        type="password"
                                        placeholder ="New Password"
                                        variant="outlined"
                                        margin="normal"
                                        className ="password"
                                        label="New Password"
                                        name="password"
                                        autoComplete="off"
                                        autoFocus
                                        inputRef ={register}
                                        error ={errors.password}
                                        helperText ={errors.password ? errors.password.message :''}
                                    /><br/>

                                     <TextField
                                           type="password"
                                        placeholder ="Confrim Password"
                                        variant="outlined"
                                        margin="normal"
                                        className="reset-P"
                                        label="Confirm Password"
                                        name="passwordConfirm"
                                        autoComplete="off"
                                        inputRef ={register}
                                        error ={errors.passwordConfirm}
                                        helperText ={errors.passwordConfirm ? errors.passwordConfirm.message :''}

                                    />
                                    <Buttons name="Reset Password"/>

                                    </form>
                                       </div>
                </Grid>
                </Grid>
                </>

            }

          
    


        {isTabletOrMobileDevice && <>
            <div>
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
                <Grid item xs={12} sm={4} md={6}><Root/></Grid>
                <Grid item xs={12} sm={8} md={6}  elevation={6} square className ="d">

                                <h2 className ="image-heading">Reset Password</h2>
                                    <p className="heading-text">Set a new password for your account</p>
                            <div className ="right-side">
                                <Images name ="resetPassword"/>
                                <form className ="resetPassword" onSubmit ={handleSubmit(onSubmit)} noValidate>

                                    <TextField
                                        type="password"
                                        placeholder ="New Password"
                                        variant="outlined"
                                        margin="normal"
                                        className="password"
                                        label="New Password"
                                        name="password"
                                        autoComplete="off"
                                        autoFocus
                                        inputRef ={register}
                                        error ={errors.password}
                                        helperText ={errors.password ? errors.password.message :''}
                                    /><br/>

                                    <TextField
                                        type="password"
                                        placeholder ="Confrim Password"
                                        variant="outlined"
                                        margin="normal"
                                        className="reset-P"
                                        label="Confirm Password"
                                        name="passwordConfirm"
                                        autoComplete="off"
                                        inputRef ={register}
                                        error ={errors.passwordConfirm}
                                        helperText ={errors.passwordConfirm ? errors.passwordConfirm.message :''}

                                    />
                                        <Buttons name="Reset Password"/>

                                    </form>
                               

                           
                            </div>
                
                </Grid>
                </Grid>
           
            
           

            
        </div>

        </>}
      
       
        </div>
        
    )
       
}

export default ResetPassword
