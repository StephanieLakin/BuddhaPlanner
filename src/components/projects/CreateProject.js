import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions' 

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createProject(this.state);
        this.props.history.push('/');
      //  console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken">Create Project</h5>
                    <div className="input-field">                        
                        <input type="text" id="title" onChange={this.handleChange} />
                        <label htmlFor="title" >Project Title</label>
                    </div>
                    <div className="input-field">                        
                        <textarea name="content" id="content" className="materialize-textarea" cols="30" rows="10" onChange={this.handleChange}></textarea>
                        <label htmlFor="content" >Content</label>
                    </div>
                    <div className="input-field" >
                        <button className="btn pink waves-effect lighten-1 z-depth-0" >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null, mapDispatchToProps)(CreateProject)
