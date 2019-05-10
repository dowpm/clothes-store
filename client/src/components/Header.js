import React from 'react';
import {Link } from 'react-router-dom'

const NavBar = ({item, user, logout}) => {
    const u = Object.keys(user.currentUser).length
    return(
        <div>
            <header className="header mb-5">
                <div id="top">
                <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 text-center text-lg-right">
                    <ul className="menu list-inline mb-0">
                        {/* <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li> */}
                        {u === 0?
                        <li className="list-inline-item"><Link to="/register">Login / Register</Link></li>
                        :
                        <li className="list-inline-item"><Link to="" onClick={logout}>Logout</Link></li>
                        }
                    </ul>
                    </div>
                </div>
                </div>
                </div>
                

                <nav className="navbar navbar-expand-md">
                    <div className="container">
                    {/* <a href="/" className="navbar-brand home"> */}
                    <Link to="/" className="navbar-brand home">
                        <img src="img/logo.png" alt="Clothes Store" className="d-none d-md-inline-block" />
                        <img src="img/logo-small.png" alt="Clothes Store" className="d-inline-block d-md-none" />
                        <span className="sr-only">ClothesStore - go to homepage</span>
                    </Link>
                    {/* </a> */}
                    <div className="navbar-buttons">
                        <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler">
                        <span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify"></i>
                        </button>
                        {/* <a href="basket" className="btn btn-outline-secondary navbar-toggler"><i className="fa fa-shopping-cart"></i></a> */}
                    </div>
                    <div id="navigation" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            {/* <a href="/" className={item === `/`? "nav-link active": "nav-link"}>Home</a> */}
                            <Link to="/" className={item === '/'? "nav-link active": "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a href="/products" className={item === '/products'? "nav-link active": "nav-link"}>Products</a> */}
                            <Link to="/products" className={item === '/products'? "nav-link active": "nav-link"}>Products</Link>
                        </li>
                        

                        {u !== 0?
                        <li className="nav-item">
                            <Link to="/admin/products" className={item.slice(0,6) === '/admin'? "nav-link active": "nav-link"}>Manage</Link>
                            
                        </li>:''
                        }

                        

                        </ul>

                        

                    </div>

                    </div>
                </nav>
                {/* <!-- /.navbar--> */}

            </header>
        </div>
    )
}

export default NavBar