import React, { Component } from 'react'
import swal from 'sweetalert'

export default class LoginForm extends Component{

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        if(this.state.password === '' || this.state.email === ''){
            swal('Error','fields can\'t be empty ', "error")
            return
        }

        this.props.submitLogin(this.state, this.clearState)
        
    }

    clearState = () => {
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <div className="col-lg-6">
                <div className="box">
                    <h1>Login</h1>
                    <p className="lead">Already our customer?</p>
                    
                    <hr/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={this.state.email} className="form-control" 
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={this.state.password} className="form-control" 
                            onChange={this.handleChange}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}