import React from 'react'
import Button from 'react-bootstrap/Button'
import './component.css'
// import { Icon , InlineIcon } from '@iconify/react';
// import home from "@iconify/icons-mdi-light/home";
function Buttons(props) {
        const handleSubmit = (data)=>{
            console.log(data);
        }
 
        let color = "";
        let buttonText ="";// eslint-disable-next-line
        let icon = "";
        if(props.name === "google")
        {
            color ="danger";
            buttonText = "Sign in with Google"
            
        }
        else if(props.name === "Sign In" || "Reset Password")
        {
            color = "primary";
            buttonText =props.name;
        }
        else if(props.name === "facebook")
        {
            color = "info";
            buttonText ="Sign in with Facebook"
        }
        //Need to configure the code so that when using google/facebook the text appears left aligned over centerd
    return (
        <div>
           
           <Button as="input" type="submit" value={buttonText} onClick ={handleSubmit}  block className = "button" variant ={color}/>{' '}        </div>
    )
}

export default Buttons
