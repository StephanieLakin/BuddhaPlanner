import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

export const SignInLinks = (props) => {
   return (
        <ul className="right">
                <li><NavLink to='/createproject'>New Project</NavLink></li>
                <li><a onClick={props.signOut}>Log Out</a></li>           
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">
               SJL
                </NavLink></li>
        </ul>
   )
}

const mapDispatchToProps = (dispatch) => {
return {
   signOut: () => dispatch(signOut())
}
}
export default connect(null, mapDispatchToProps)(SignInLinks)