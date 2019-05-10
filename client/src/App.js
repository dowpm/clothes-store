import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css'
import './css/style.default.css'

import Header from './components/Header'
import All from './components/All'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import Admin from './containers/Admin'


import AllProducts from './containers/AllProducts'
import Home from './components/Home'
import { Alert } from './helpers/notifications';
import { connect } from 'react-redux'
import {success} from './helpers/notifications';


class App extends Component {

  componentDidMount() {
    if(Object.keys(this.props.user.currentUser).length === 0){
        
        if(localStorage.getItem('current_user')){
          
          this.props.dispatch({type: 'SET_STORAGE'})
        }
    }
  }

  logout = (e) => {
    
    this.props.dispatch({type: 'LOG_OUT'})
    success('You Logout')

  }

  render() {
    const {user} = this.props

    const u = Object.keys(user.currentUser).length
    return (
      <Router>
        <Header item={'path'} user={user} logout={this.logout}/>
        <Alert stack={ { limit: 3 } }/>
        <div id="all" style={{paddingBottom:100}}>
            <div id="content">
                <div className="container">
                <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={All} />
          <Route exact path="/products/:id?" component={AllProducts} />
          {u !== 0?
          <Route  path="/admin/products/:id?" component={Admin} />
            :''}
          <Route component={NotFound} />

        </Switch>

                </div>
                </div>
              </div>
          </div>
        <Footer />

      </Router>      
    );
  }
}

export default connect(
  state => ({user: state.users})
)(App)