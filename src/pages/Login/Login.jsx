import React, { useRef } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Login() {
    const email=useRef();
    const password=useRef();
    const username=useRef();
    const handleClick=async(e)=>{
        e.preventDefault();
        let obj={"username":username.current.value,"email":email.current.value,"password":password.current.value};
        sessionStorage.setItem("user",JSON.stringify(obj));
        window.location.href="/";   
    };
    return (
      <div className="login" style={{ backgroundImage: `url(${PF}12.jpg)` }}>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BookMovies</h3>
                    <span className="loginDesc">
                      find and post your favourite recipes.....
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input type="text" placeholder='Username' className="loginInput" ref={username} required/>
                        <input type="email" placeholder='Email' className="loginInput" ref={email} required/>
                        <input type="password" placeholder='Password' className="loginInput" ref={password} required minLength='6'/>
                        <button className="loginButton" type='submit'>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
