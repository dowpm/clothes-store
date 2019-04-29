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
import Products from './components/Products'
import Orders from './components/Orders'
import Order from './components/Order'
import AllProducts from './components/AllProducts'
import Home from './components/Home'
import Cart from './components/Cart'

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div id="all">
            <div id="content">
                <div className="container">
                <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={All} />
          <Route exact path="/products" component={Products} />
          
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/all" component={AllProducts} />
          {/* <Route exact path="/basket" component={Cart} /> */}
        </Switch>
        
        <Route component={NotFound} />

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
