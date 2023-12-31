import React, { useState } from "react";
import "./LoginScreen.css"
import SignUpScreen from "./screens/SignUpScreen";

function LoginScreen()
{
   const [SignIn,setSignIn] = useState(false);

    return(

        <div className="loginScreen">
            <div className="loginScreen_backgruound">
                <img
                   className="loginScreen_logo"
                   src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                   alt="">   
                </img>
                 <button className="loginScreen_button"
                   onClick={() => setSignIn(true)}
                   >Sign In</button> 

                <div className="loginScreen_gradient"></div>
               <div className="loginScreen_body">

                {SignIn ? (
                    <SignUpScreen/>
                ):(

                    <>
                    <h1>Unlimited films, TV programmes and more. </h1>
                    <h2>watch anywhere cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                     <div className="loginScreen_input">
                        <form>
                            <input
                             type="email" placeholder="Email Address"
                             />
                             <button   onClick={() => setSignIn(true)} className="loginScreen_getStarted">GET STARTED</button>
                        </form>
                     </div>

                   </>
                
                )}
        
                </div>
                 
            </div>
        </div>
    )
}
export default LoginScreen;