import React from "react";
import '../Login/Login.css';
const Login = () => {
    return ( 
        <div className='losererginContainer'>
        <div className='loginBox'>
            <form>
                <h1 align="center">MONO BLOG</h1>
            <input placeholder='username'/>
            <input placeholder='password' type="password"/>
            <input className="submitbtn1" type='submit' value='LOGIN'/>
            </form>
        </div>
         </div>
    )
}
export default Login;