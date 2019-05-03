import React, { Component } from 'react'
import swal from 'sweetalert'

export default class RegisterForm extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        seller: false
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        if(this.state.name === '' || this.state.email === ''){
            swal('Error','fields can\'t be empty ', "error")
            return
        }

        this.props.submitRegister(this.state)
        this.clearState()
    }

    clearState = () => {
        this.setState({
            email: '',
            name: '',
            password: '',
            seller: false
        })
    }

    render(){
        return(
            <div className="col-lg-6" style={{'paddingBottom': '200px'}}>
                <div className="box">
                    <h1>New account</h1>
                    <p className="lead">Not our registered customer yet?</p>
                    
                    <hr/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control" 
                            value={this.state.password}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-user-md"></i> Register</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
    
}