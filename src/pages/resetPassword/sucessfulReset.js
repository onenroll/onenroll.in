import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import Root from '../../components/imageHandler';
import Images from '../../components/images';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Buttons from '../../components/Buttons';




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

function SucessfulReset() {
    const classes = useStyles();

    return (
        <div>
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
                <Grid item xs={12} sm={4} md={6}><Root/></Grid>
                <Grid item xs={12} sm={8} md={6}  elevation={6} square className ="d">


                    
                            <h2 className ="image-heading">Reset Sucessful </h2>    
                            <p className="heading-text">You’ve got yourself a new password.</p>
                            <div className ="right-side">
                                <Images name ="sucessfulReset"/>
                                <h2>Sucessful Password Reset</h2>
                                <p className ="text-centre">Your password has been sucessfully reset</p>
                                <p className ="text-centre">You can now use your new password to sign-in to your account.</p>
                                <Buttons name="Sign In"/>
                            </div>
                            </Grid>
                            </Grid>
                    
        </div>
    )
}

export default SucessfulReset
