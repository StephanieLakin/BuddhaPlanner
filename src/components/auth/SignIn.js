import React, { Component } from 'react'

 class SignIn extends Component {
     state = {

     }
     handleChange = (e) => {
         console.log(e)
     }
     handleSubmit = (e) => {
         console.log(e)
     }
    render() {
        return (
            <div className="container">
                 <form onSubmit={this.handleSubmit} className="white"></form>
                 <h5 className="grey-text text-darken">Sign In</h5>
                 <div className="input-field">
                     <label htmlFor="email" >Email</label>
                     <input type="email" id="email" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <label htmlFor="password" >Password</label>
                     <input type="password" id="password" onChange={this.handleChange}/>
                 </div>
                 <div className="input-field">
                     <button className="btn pink lighten-1 z-depth-0">Login</button>
                 </div>  
            </div>
        )
    }
}

export default SignIn
