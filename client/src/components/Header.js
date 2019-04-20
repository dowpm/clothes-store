import React, { Component } from 'react';

export default class NavBar extends Component {
    
    render(){
        return(
            <div>
                <header className="header mb-5">
                    <div id="top">
                        <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-12 text-center text-lg-right">
                            <ul className="menu list-inline mb-0">
                                <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
                                <li className="list-inline-item"><a href="register">Register</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        
                        <div id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" className="modal fade">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Customer login</h5>
                                <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                <form action="customer-orders.html" method="post">
                                <div className="form-group">
                                    <input id="email-modal" type="text" placeholder="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input id="password-modal" type="password" placeholder="password" className="form-control" />
                                </div>
                                <p className="text-center">
                                    <button className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                                </p>
                                </form>
                                <p className="text-center text-muted">Not registered yet?</p>
                                <p className="text-center text-muted"><a href="register.html"><strong>Register now</strong></a>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <!-- *** TOP BAR END ***--> */}

                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                        <a href="index.html" className="navbar-brand home">
                            <img src="img/logo.png" alt="Clothes Store" className="d-none d-md-inline-block" />
                            <img src="img/logo-small.png" alt="Clothes Store" className="d-inline-block d-md-none" />
                            <span className="sr-only">ClothesStore - go to homepage</span>
                        </a>
                        <div className="navbar-buttons">
                            <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler">
                            <span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify"></i>
                            </button>
                            <a href="basket.html" className="btn btn-outline-secondary navbar-toggler"><i className="fa fa-shopping-cart"></i></a>
                        </div>
                        <div id="navigation" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <a href="#" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item dropdown menu-large">
                                <a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" className="dropdown-toggle nav-link">Store<b className="caret"></b></a>
                                <ul className="dropdown-menu megamenu">
                                <li>
                                    <div className="row">
                                    <div className="col-md-6 col-lg-3">
                                        <h5>Clothing</h5>
                                        <ul className="list-unstyled mb-3">
                                        <li className="nav-item"><a href="category.html" className="nav-link">T-shirts</a></li>
                                        <li className="nav-item"><a href="category.html" className="nav-link">Shirts</a></li>
                                        <li className="nav-item"><a href="category.html" className="nav-link">Pants</a></li>
                                        <li className="nav-item"><a href="category.html" className="nav-link">Accessories</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <h5>Clothing</h5>
                                        <ul className="list-unstyled mb-3">
                                        <li className="nav-item"><a href="category.html" className="nav-link">T-shirts</a></li>
                                        <li className="nav-item"><a href="category.html" className="nav-link">Shirts</a></li>
                                        <li className="nav-item"><a href="category.html" className="nav-link">Pants</a></li>
                                        <li className="nav-item"><a href="category.html" className="nav-link">Accessories</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="products" className="nav-link">Men</a>
                            </li>
                            <li className="nav-item">
                                <a href="products" className="nav-link">Women</a>
                            </li>
                            <li className="nav-item">
                                <a href="products" className="nav-link">Kids</a>
                            </li>

                            </ul>

                            <div className="navbar-buttons d-flex justify-content-end">
                            {/* <!-- /.nav-collapse--> */}
                            <div id="search-not-mobile" className="navbar-collapse collapse"></div>
                            <div id="basket-overview" className="navbar-collapse collapse d-none d-lg-block">
                                <a href="basket" className="btn btn-primary navbar-btn">
                                <i className="fa fa-shopping-cart"></i><span>3 items in cart</span>
                                </a>
                            </div>
                            </div>

                        </div>

                        </div>
                    </nav>
                    {/* <!-- /.navbar--> */}

                </header>
            </div>
        )
    }
}