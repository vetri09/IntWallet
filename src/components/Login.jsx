import React, { useState } from 'react'
import Table from './Table'

export default function Login() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [logIn, setLogIn] = useState(true)
    
    function handleClick(e){
        e.preventDefault()
        if(localStorage.getItem(name)===password){
            console.log("correct")
            setLogIn(false)
        }else{
            console.log("wrong")
            setLogIn(true)
        }
    }
    return (
        <div>
            {
            (logIn) ? 
            (
            <div className="signup_container"> 
            <div className="signup_form">
                <h1 className="signup_heading">Login</h1>
                <form>
                    <label htmlFor="name" className="signup_head">Name:</label>
                    <input className="signup_input" type="text" name="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/> 
                    <label htmlFor="password" className="signup_head">Password:</label> 
                    <input className="signup_input" type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
                    <button className="signup_btn" type="submit" onClick={handleClick}>Login</button>
                </form>
            </div>
            </div>
            ):
            <Table data={name}/>
            }
        </div>
    )
}