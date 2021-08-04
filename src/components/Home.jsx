import React from 'react'
import SignUp from './SignUp'
import history from './history'
import homeComp from '../svgs/homeComp.svg'
import {Router, Switch, Route, Link} from "react-router-dom"

export default function Home() {
    return (
        <div className="home_container">
        <div className="home_content">
            <h1 className="home_head">Where will crypto <br /> take you?</h1>
            <p className="home_para">With the IntWallet, crypto has never been easier</p>
            <Router history={history}>
                <Link to="/signup" style={{ textDecoration: 'none', color: '#fff' }} className="nav_signup_btn">Sign Up</Link>
                <Switch>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </div>
        <div>
            <img src={homeComp} alt="computer" />
        </div>
    </div>
    )
}