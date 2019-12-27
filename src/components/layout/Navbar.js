import React from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from '../../components/layout/SignInLinks'
import SignOutLinks from '../../components/layout/SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const {auth, profile} = props;
    //console.log(auth)
    const links = auth.uid ? <SignInLinks profile={profile} /> :  <SignOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left-align left">Buddha Planner</Link>
                {links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
   console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)