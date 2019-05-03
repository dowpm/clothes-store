import React, { Component } from 'react';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import swal from 'sweetalert';

export default class All extends Component {

    state = {
    }

    submitRegister = (formRegisterState) => {
        // swal(formRegisterState.email)
        fetch('http://localhost:3001/api/v1/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formRegisterState)
        }).then(res => res.json())
        .then(json => console.log(json))
    }

    submitLogin = (formLoginState) => {
        swal(formLoginState.email)
        fetch('the server URL', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="col-lg-12">
                {/* <!-- breadcrumb--> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li aria-current="page" className="breadcrumb-item active">New account / Sign in</li>
                    </ol>
                </nav>
                </div>

                <RegisterForm submitRegister={this.submitRegister}/>

                <LoginForm submitLogin={this.submitLogin}/>

                
            </React.Fragment>
        )
    }
}