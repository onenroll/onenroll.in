import React from 'react';

import { Button} from 'react-bootstrap';
import { FaGoogle,FaFacebookF} from 'react-icons/fa';
import './component.css'

const SocailButton = ()=>{
    return(
        <div>
        <Button type="submit"  id ="a" className = "button"  variant ="danger">
            <span className ="google-style"><FaGoogle style ={{float:"left"}}/></span>
            <span className="google-button">Sign in with google</span> 
        </Button> {' '}  
        <Button type="submit"  id ="b"   className = "button" variant ="info">
            <span className = "logo-style"><FaFacebookF style={{float:"left"}}/></span>
            <span className="facebook-button">Sign in with facebook</span>
        </Button> {' '}  
        </div>
    )
}

export default SocailButton