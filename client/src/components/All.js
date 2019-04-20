import React, { Component } from 'react';
import RegisterForm from './RegisterForm'

export default class All extends Component {

    state = {
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="col-lg-12">
                {/* <!-- breadcrumb--> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li aria-current="page" className="breadcrumb-item active">New account / Sign in</li>
                    </ol>
                </nav>
                </div>

                <RegisterForm />

                <div className="col-lg-6">
                    <div className="box">
                        <h1>Login</h1>
                        <p className="lead">Already our customer?</p>
                        
                        <hr/>
                        <form action="customer-orders.html" method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-control" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                        </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}