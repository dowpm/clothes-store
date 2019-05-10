import React, { Component } from 'react'
import swal from 'sweetalert'
import { error} from '../helpers/notifications'

export default class RegisterForm extends Component{

    state = {
        user:{
            full_name: '',
            email: '',
            password: '',
            seller: false
        },
        errors:{
            full_name: '',
            email:''
        }
    }

    handleChange = event => {

        this.setState({
            user: {
                ...this.state.user,
                [event.target.id]: event.target.value
            }
        }, () => {
            this.setState({
                errors: this.handleError(this.state.user)
            })
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        let error = this.handleError(this.state.user)
        
        this.setState({
            errors: error
        },() => {
            if(Object.keys(this.state.errors).length === 0  ){
                this.props.submitRegister(this.state.user, this.clearState)
            }else{
                swal('Error','Fill empty fields ', "error")
            }
        })       

    }

    handleError = (user) => {
        let error = {}
        if(user.full_name === ''){
            error.full_name = "can't be blank"
        }
        if(user.email === ''){
            error.email = "can't be blank"
        }
        if(user.password.length < 6){
            error.password = "6 char is required"
        }
        return error
    }

    clearState = () => {
        this.setState({
            user:{
                email: '',
                full_name: '',
                password: '',
                seller: false
            },
            errors:{}
            
        })
    }

    render(){
        let {errors} = this.state
        return(
            <div className="col-lg-6" style={{'paddingBottom': '200px'}}>
                <div className="box">
                    <h1>New account</h1>
                    <p className="lead">Not our registered customer yet?</p>
                    
                    <hr/>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="full_name" type="text" className={errors.full_name ? 'form-control is-invalid':'form-control '}
                            name="name"
                            value={this.state.user.full_name}
                            onChange={this.handleChange}/>
                        <span className="text-danger">{errors.full_name}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" className={errors.email? 'form-control is-invalid':'form-control '}
                            name="email"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                        />
                        <span className="text-danger">{errors.email}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className={errors.password ? 'form-control is-invalid':'form-control '}
                            value={this.state.user.password}
                            onChange={this.handleChange}
                        />
                        <span className="text-danger">{errors.password}</span>
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