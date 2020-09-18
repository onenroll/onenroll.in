import React from 'react';
import PasswordStrengthIndicatorItem from './test'
import './component.css'
const PasswordStrengthIndiactor = ({validity:{minChar,number,specialCharacter,upperCase}})=>{
    return (
       
        <div className ="password-meter text-left mb-4">
               
                <ul>
                   
                    <PasswordStrengthIndicatorItem isValid={minChar} text ="Have atleast 8 character" />
                    <PasswordStrengthIndicatorItem isValid ={number} text ="Have atleast 1 number "/>
                    <PasswordStrengthIndicatorItem isValid ={specialCharacter}  text ="Have atleast 1 special character"/>
                    {/* <PasswordStrengthIndicatorItem isValid ={upperCase}  text ="Have atleast 1 Upper Case character"/> */}
                </ul>

        </div>
    )
}




export default PasswordStrengthIndiactor