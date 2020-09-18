import React ,{useState} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import * as yup from "yup";
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Root from '../../components/imageHandler';
import Buttons from '../../components/Buttons';
import { useForm } from 'react-hook-form'
import SocailButton from '../../components/socialButtons';
import { FaEye,FaEyeSlash} from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers';

// const [icon,setIcon] = useState(<FaEyeSlash className ="icon" size ={20} />);
//     const [passwordShown, setPasswordShown] = useState(false);
//     const togglePasswordVisiblity = () => {
//         setPasswordShown(passwordShown ? false : true);
//         setIcon(passwordShown?<FaEyeSlash className ="icon" size ={20} />:<FaEye className ="icon" size ={20}/>)
//       };

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


const schema = yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Please enter a valid Email ID"),
    password: yup
    .string()
    .required("Please enter your password")
  });
export default function SignInSide() {
  const classes = useStyles();

  const {register,handleSubmit,errors} = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors);
  

    const onSUbmit  = (data)=>{
        console.log(data);
    }
    
    
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={6}><Root/></Grid>
      <Grid item xs={12} sm={8} md={6}  elevation={6} square className ="d">
        <div className="mu">
         
            <h2 className ="image-heading ca">SignIn </h2>
             <p className="heading-text below-heading">New User? <span style={{ color: 'blue' }}>Create an Account</span></p>
          <form className="sigin-form" onSubmit ={handleSubmit(onSUbmit)} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              className = "email-feild"
              inputRef ={register}
              error ={errors.email}
            
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              className = "password-feild"
              type="password"
              name="password"
              label="Password"
              id="password"
              inputRef ={register}
              autoComplete="current-password"
              error ={errors.password}
              helperText ={errors.password ? errors.password.message :''}

              
            />
         
           
            <FormControlLabel
              control={<Checkbox inputRef ={register} value="remember" color="primary" />}
              label="Remember me"
            />
            <Link href="#" className ="forgot">
                Forgot Password?
            </Link>
           
           
           
            <Buttons name ="Sign In"/>
            
            <h6><span>OR</span></h6>
              
            <SocailButton/>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
