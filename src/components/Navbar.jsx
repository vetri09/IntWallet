import React from 'react'
import Home from './Home'
import Prices from './Prices'
import Login from './Login'
import SignUp from './SignUp'
import history from './history'
import Logo from '../svgs/Logo.svg'
import './navhome.css'
import {Router, Switch, Route, Link} from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <nav>
            <Router history={history}>
                <ul className="nav_bar">
                    <li className="nav_logo">
                        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><img src={Logo} alt="logo" />IntWallet</Link>
                    </li>
                    <li>
                        <Link to="/Prices" style={{ textDecoration: 'none', color: '#fff' }}>Prices</Link>
                    </li>
                    <li>
                        <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>Login</Link>
                    </li>
                    <li className="nav_signup_btn">
                        <Link to="/signup" style={{ textDecoration: 'none', color: '#fff' }}>Sign Up</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/prices">
                        <Prices />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </nav>
        </>
    )
}