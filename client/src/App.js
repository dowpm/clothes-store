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
import Products from './containers/Products'
import Admin from './containers/Admin'
import Orders from './components/Orders'
import Order from './components/Order'
import AllProducts from './components/AllProducts'
import Home from './components/Home'
import Cart from './components/Cart'
import { Alert } from './helpers/notifications';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Alert stack={ { limit: 3 } }/>
        <div id="all">
            <div id="content">
                <div className="container">
                <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={All} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/products/men" component={Products} />
          <Route exact path="/products/women" component={Products} />
          <Route exact path="/products/kids" component={Products} />
          
          <Route exact path="/orders" component={Orders} />
          <Route  path="/admin" component={Admin} />
          <Route exact path="/order" component={Order} />
          {/* <Route exact path="/basket" component={Cart} /> */}
          <Route exact path="/404" component={NotFound} />
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

export default App;
