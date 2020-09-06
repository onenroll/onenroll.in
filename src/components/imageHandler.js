
import React from 'react';

import Images from './images'


import '../styles.css'
import { useMediaQuery } from 'react-responsive'


function Root(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      });
      // eslint-disable-next-line
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })
      let imageToBeReplaced ="";
      if(isDesktopOrLaptop){
          imageToBeReplaced = "Image";
          
      }
      else{
          imageToBeReplaced = "mobile"
      }
   
    return (
        <div>
            <Images name = {imageToBeReplaced}  className = "placeholder"/>

        </div>
    )
}

export default Root
