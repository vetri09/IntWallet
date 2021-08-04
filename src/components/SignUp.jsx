import React, { useState } from 'react'
import './loginsignup.css'
import Login from './Login'

export default function SignUp() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [signIn, setSignIn] = useState(true)

    function handleLoginClick(){
        setSignIn(false)
    }
    function handleClick(e){
        e.preventDefault()
        if (!name || !password) {
            setSignIn(true)
            console.log("enter name and password")
        } else {
            setSignIn(false)
            localStorage.setItem(name ,password)
            console.log("Saved in Local Storage")
        }
    }
    return (
        <div>
            {
            (signIn) ? 
            (
            <div className="signup_container">
            <div className="signup_form">
                <h1 className="signup_heading">Sign up</h1>
                <form>
                    <label htmlFor="name" className="signup_head">Name</label>
                    <input className="signup_input" type="text" name="name"  placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/> 
                    <label htmlFor="password" className="signup_head">Password</label>
                    <input className="signup_input" type="password" name="password"  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className="signup_btn" type="submit" onClick={handleClick}>Sign up</button>
                </form>
                <p className="signup_login">Already registered <span className="signup_link_tag" onClick={handleLoginClick}>log in?</span></p>
            </div>
            </div>
            ):
            <Login />
            }
        </div>
    )
}