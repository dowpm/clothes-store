import React, { Component } from 'react';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
// import swal from 'sweetalert';
import { connect } from 'react-redux'
import { signUp, logIn} from '../redux/actions/userActions'

class All extends Component {

    state = {
    }

    submitRegister = (formRegisterState, cb) => {

        this.props.signUp(formRegisterState, cb, ()=>{const { history } = this.props;
        history.push(`/admin/products`);})
    }

    submitLogin = (formLoginState, cb) => {
        this.props.logIn(formLoginState, cb, ()=>{
            const { history } = this.props;
            history.push(`/admin/products`);})
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

export default connect(null,
    {signUp, logIn}
)(All)