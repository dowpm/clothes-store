import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css'
import './css/style.default.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Admin from './containers/Admin'

import AllProducts from './containers/AllProducts'
import Home from './components/Home'
import { Alert } from './helpers/notifications';

class App extends Component {
  render() {

    return (
      <Router>
        <Header item={'path'}/>
        <Alert stack={ { limit: 3 } }/>
        <div id="all">
            <div id="content">
                <div className="container">
                <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id?" component={AllProducts} />
          <Route  path="/admin/products/:id?" component={Admin} />
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

export default App;
