import React from 'react'
import Root from '../../components/imageHandler';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as Yup from "yup";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Buttons from '../../components/Buttons';
import SocailButton from '../../components/socialButtons';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const Schema = Yup.object().shape({
    fname:Yup
            .string()
            .required("Please enter a First Name"),
    lname:Yup
            .string()
            .required("Please enter a Last Name"),
    
    email:Yup
            .string()
            .email()
            .required("Please enter a valid Email ID"),
    phoneNumber:Yup
                .string()
                .matches(phoneRegExp," Invalid Phone number")
                .required("Please enter your Phone Number "),
    password: Yup.string()
                .matches(lowercaseRegex, '1 lowercase required!')
                .matches(uppercaseRegex, '1 uppercase required!')
                .matches(specialCharacterRegx,'1 Special Character is required')
                .matches(numericRegex, '1 number required!')
                .min(8, 'Minimum 8 characters required!')
                .required('Required!'),

    passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password')], 'Password must be the same!')
                .required('Required!'),
    
    
})

const onSubmit = (data)=>{console.log(data);}
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function CreateAccountMUI() {
    const classes = useStyles();
    const {register,handleSubmit,errors} = useForm({
        resolver: yupResolver(Schema)
    });
    return (
        <div>
            <Grid container component="main" spacing={2} className ={classes.root}>
            <CssBaseline />
                <Grid item xs={12} sm={4} md={6}><Root/></Grid>
                <Grid item xs={12} sm={8} md={6}  elevation={6} square>
                    <h2 className ="image-heading ca">Create Account</h2>
                      <p className="below-heading">Already have an account? <span style={{ color: 'blue' }}>SignIn</span></p>
                      <form  onSubmit ={handleSubmit(onSubmit)} noValidate className ="createAccount">
                      <Grid container spacing ={1}>
                        <Grid item xs={6} sm={6}>
                                <TextField
                                    iputRef ={register}
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    className ="firstName"
                                    error ={errors.fname}
                                    helperText ={errors.fname ? errors.fname.message :''}
                                />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="lastName"
                                    inputRef ={register}
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="off"
                                    className ="lastName"
                                    error ={errors.lname}
                                    helperText ={errors.lname ? errors.lname.message :''}
                                />
                        </Grid>
                        
                        <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    className ="email"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                    inputRef ={register}
                                    error ={errors.email}
                                    helperText ={errors.email ? errors.email.message :''}

                                />
                        </Grid>
                        <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    className ="phoneNumber"
                                    label="Phone Number"
                                    name="PhoneNumber"
                                    autoComplete="off"
                                    inputRef ={register}
                                    error ={errors.phoneNumber}
                                    helperText ={errors.phoneNumber ? errors.phoneNumber.message :''}

                                />
                        </Grid>
                        <Grid item xs={6} md={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    className ="password"
                                    label="Password"
                                    name="password"
                                    autoComplete="off"
                                    inputRef ={register}
                                    error ={errors.password}
                                    helperText ={errors.password ? errors.password.message :''}

                                />
                        </Grid>
                        <Grid item xs={6} md={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                   className = "confirmPassword"
                                   
                                    label="Confrim Password"
                                    name="Confrim Password"
                                    autoComplete="off"
                                    inputRef ={register}
                                    error ={errors.passwordConfirm}
                                    helperText ={errors.passwordConfirm ? errors.passwordConfirm.message :''}

                                    
                                />
                        </Grid>
                        </Grid>
                        <Buttons name ="Create Account"/>
                         <h6><span>OR</span></h6>
                       <SocailButton/>

                    </form>


                </Grid>
            </Grid>


        </div>
    )
}

export default CreateAccountMUI
