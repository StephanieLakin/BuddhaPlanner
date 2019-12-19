import React from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from '../../components/layout/SignInLinks'
import SignOutLinks from '../../components/layout/SignOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left-align left">Buddha Planner</Link>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}
export default connect(mapStateToProps)(Navbar)