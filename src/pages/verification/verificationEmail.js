import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Root from '../../components/imageHandler';
import Images from '../../components/images';

import '../page.css'
const useStyles = makeStyles((theme) => ({  
    root: {
      height: '100vh',
    },
}));

function VerificationEmail() {
    const classes = useStyles();
    return (
        <div>
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
                <Grid item xs={12} sm={4} md={6}><Root/></Grid>
                <Grid item xs={12} sm={8} md={6}  elevation={6} square className ="em">

                    
                    
                            <h2 className ="image-heading">Verification </h2>    
                            <p className="heading-text">One step away from activating your account.</p>
                            <div className ="right-side">
                                <Images name ="verificationEmail"/>
                                    <h2>Verify Your Email</h2>
                                    <p className ="ImageText">We have send an email to useremailaddress@email.com, please check your inbox and click the link to verify your email.</p>
                                  

                           
                            
                            </div>
                            </Grid>
                            </Grid>
                 
            
        </div>
    )
}

export default VerificationEmail
