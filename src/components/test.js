import React from 'react'
import { FaCheckCircle ,FaCaretRight} from "react-icons/fa";
const PasswordStrengthIndicatorItem = ({isValid,text})=>{
    const highlight = isValid?"text-success": isValid!==null ? "text-danger" :"";
    const iconColor = isValid?"blue": isValid!==null ? "green" :"";
    return (<li className ={highlight}>{<FaCheckCircle style ={{color:{iconColor}}}/>}  {text}</li>)
}
export default PasswordStrengthIndicatorItem