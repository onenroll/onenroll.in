import React from 'react';
import ResetPassword from './pages/resetPassword/resetPassword'
import SignIn from './pages/signin/SignIn';
import ForgotPassword from './pages/forgotPassword/forgotPassword'
import SucessfulReset from './pages/resetPassword/sucessfulReset';
import VerificationOTP from './pages/verification/verificationOTP';
import CreateAccount from './pages/createAccount/createAccount';
import VerificationEmail from './pages/verification/verificationEmail';
import SignInSide from './pages/signin/signinside'
import CreateAccountMUI from './pages/createAccount/CreateAccountMUI';

export default function App() {
    return (
        <div className ="main">
          
           {/* <SignIn/> */}
           {/* <CreateAccount/> */}
            {/* <ResetPassword/> */}
            {/* <VerificationOTP /> */}
            {/* <VerificationEmail/> */}
            {/* <ForgotPassword/> */}
            {/* <SucessfulReset/> */}
           <CreateAccountMUI/>
            
        </div>
    )
}
