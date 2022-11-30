
import  {useState} from "react";
import { Link, Route } from 'react-router-dom';


function MemberLogin(){
    
    return (
     
    <div className="travel-login">
        
        <div className="member">
        <div>
        <div className="loginButton">
            <a href='/'>Member Login</a>
        </div>
        <div><a href='/'>Not a Member? Register</a></div>
        </div>
        </div> 
     
    </div>
   ); 
    
            
    
};

export default MemberLogin;