import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css'
import './css/style.default.css'
// import './vendor/owl.carousel/assets/owl.carousel.css'
// import './vendor/owl.carousel/assets/owl.theme.default.css'
import Header from './components/Header'
import All from './components/All'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
// import Products from './containers/Products'
import Admin from './containers/Admin'
// import Orders from './components/Orders'
// import Order from './components/Order'
import AllProducts from './containers/AllProducts'
import Home from './components/Home'
import { Alert } from './helpers/notifications';
import { connect } from 'react-redux'
import {success} from './helpers/notifications';

// import './App.css';

class App extends Component {

  componentDidMount() {
    if(Object.keys(this.props.user.currentUser).length === 0){
        
        if(localStorage.getItem('current_user')){
          // alert('locals user')
          this.props.dispatch({type: 'SET_STORAGE'})
        }
    }
  }

  logout = (e) => {
    // e.preventDefault()
    this.props.dispatch({type: 'LOG_OUT'})
    success('You Logout')
    // const { history } = this.props;
    // history.push(`/`)
  }

  render() {
    const {user} = this.props
    // const path = window.location.pathname
    // debugger
    const u = Object.keys(user.currentUser).length
    return (
      <Router>
        <Header item={'path'} user={user} logout={this.logout}/>
        <Alert stack={ { limit: 3 } }/>
        <div id="all">
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

          {/* <Route exact path="/register" component={All} />
          <Route exact path="/products/men" component={Products} />
          <Route exact path="/products/women" component={Products} />
          <Route exact path="/products/kids" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/basket" component={Cart} />
          <Route exact path="/404" component={NotFound} /> */}
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