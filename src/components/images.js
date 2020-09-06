import React from 'react';


export default function Images(props) {
    let url ='';
    url = "/images/"+props.name +".png";
    
    

    return (
        // eslint-disable-next-line
        <div >
        
            <img src ={url} className ={props.className} alt =" placeholder"></img>
        </div>
        
    )
}
