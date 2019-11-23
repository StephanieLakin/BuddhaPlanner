import React from 'react';
import {NavLink} from 'react-router-dom'

export const SignInLinks = () => {
   return (
        <ul className="right">
                <li>
                <NavLink to='/createproject'>New Project</NavLink>
                </li>
                <li> 
                   <NavLink to='/'>Log Out</NavLink>
                </li>           
                <li>
                    <NavLink to='/' className="btn btn-floating pink lighten-1">SJL</NavLink>
               </li>
        </ul>
   )
}
export default SignInLinks