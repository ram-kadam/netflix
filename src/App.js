import React, { useContext } from "react";
import HomeScreen from './screens/HomeScreen';
import './App.css'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import LoginScreen from "./LoginScreen";




function App()
{
    const user = localStorage.getItem("isAuth") || false;

    
     
    return(
         <div className="app">
            <Router>
            {!user ? (
                <LoginScreen/>
            ):(
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/> 
                    
                </Routes>
             )}
            </Router>
         </div>
    );
}
export default App;