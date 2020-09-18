import React from 'react'
import Button from 'react-bootstrap/Button'
import './component.css'
import { FaFacebookF } from 'react-icons/fa';

// import { Icon , InlineIcon } from '@iconify/react';
// import home from "@iconify/icons-mdi-light/home";
function Buttons(props) {
   
    
       
        //Need to configure the code so that when using google/facebook the text appears left aligned over centerd
    return (
        <div>
           
           <Button 
            
            type="submit"
            
             className = "button" 
             variant ={props.color}>
               {props.name}
             </Button>
             {' '}        </div>
    )
}

export default Buttons
