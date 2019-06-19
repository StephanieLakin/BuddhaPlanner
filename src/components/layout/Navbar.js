import React, { Component }  from 'react';
import {Link} from 'react-router-dom'
import SignInLinks from '../../components/layout/SignInLinks'
import SignOutLinks from '../../components/layout/SignOutLinks'

const Navbar = () => {
   return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Buddha Planner</Link>
                <SignInLinks/>
                <SignOutLinks/>
            </div>
        </nav>
   )
}
export default Navbar