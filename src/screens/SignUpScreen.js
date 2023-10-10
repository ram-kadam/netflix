import React, {  useContext, useState  } from 'react';
import axios from 'axios';
import './SignUpScreen.css'
// import {useNavigate } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import { AuthContext } from '../maincontext/MainContext';











function SignUpScreen()
{ 

  let {user,setUser} = useContext(AuthContext);
  
  
  let [icreds, setICreds] = useState({ email : "", password : "",});
   const [logininfo, setLogininfo] = useState(false);
// const history=useNavigate();


const onInputChange = (event) => {
  let copyOfICreds = { ...icreds }
  copyOfICreds[event.target.name] = event.target.value;
  setICreds(copyOfICreds);
}
    
     
const register = () => {
           axios.post("http://localhost:6969/Register",icreds
          ).then(()=>{console.log("o");
          }).catch(error =>{
          // console.log(icreds);
           alert(error.message);
          });
          
       
    };

    const SignIn = (e) =>{
      e.preventDefault();
      axios.post("http://localhost:6969/Register/login", icreds)
      .then((res) => {
        console.log(res.data.isValidUser);
        if(res.data.isValidUser) {
          localStorage.setItem("isAuth" , true);
          setUser(true);
      }
      
      else 
      {
      alert("INVALID CREDENTIALS");
      }
    setLogininfo(res.data);
     
  })
   
  
      
    }

    return(
    <div className="signUpScreen">
        <form>
     <h1>Sign In</h1>
     <input type="text" name="email" value={icreds.email} onChange={onInputChange} id='' placeholder="Email"/>
     <input value={icreds.password} onChange={onInputChange}  placeholder="Password" id='' type="password" name='password'/>
      <button type="submit" onClick={SignIn}>Sign In</button>

      <h4>
        <span className="signUpScreen_gray">New to Netflix? </span>
        <span className="signUpScreen_link" onClick={register}>Sign Up now</span></h4>
      </form>
    </div>
    )
}
export default SignUpScreen;