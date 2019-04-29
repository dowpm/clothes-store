import React, { Component } from 'react';

export default class LeftMenu extends Component {
    render(){
        return(
            <div className="col-lg-3">
            {/* <!--
            *** MENUS AND FILTERS ***
            _________________________________________________________
            --> */}

                <div className="card sidebar-menu mb-4">
                    <div className="card-header">
                    <h3 className="h4 card-title">Categories</h3>
                    </div>
                    <div className="card-body">
                    <ul className="nav nav-pills flex-column category-menu">
                        <li><a href="category.html" className="nav-link">Men <span className="badge badge-secondary">42</span></a>
                        <ul className="list-unstyled">
                            <li><a href="category.html" className="nav-link">T-shirts</a></li>
                            <li><a href="category.html" className="nav-link">Shirts</a></li>
                            <li><a href="category.html" className="nav-link">Pants</a></li>
                            <li><a href="category.html" className="nav-link">Accessories</a></li>
                        </ul>
                        </li>
                        <li><a href="category.html" className="nav-link active">Ladies  <span className="badge badge-light">123</span></a>
                        <ul className="list-unstyled">
                            <li><a href="category.html" className="nav-link">T-shirts</a></li>
                            <li><a href="category.html" className="nav-link">Skirts</a></li>
                            <li><a href="category.html" className="nav-link">Pants</a></li>
                            <li><a href="category.html" className="nav-link">Accessories</a></li>
                        </ul>
                        </li>
                        <li><a href="category.html" className="nav-link">Kids  <span className="badge badge-secondary">11</span></a>
                        <ul className="list-unstyled">
                            <li><a href="category.html" className="nav-link">T-shirts</a></li>
                            <li><a href="category.html" className="nav-link">Skirts</a></li>
                            <li><a href="category.html" className="nav-link">Pants</a></li>
                            <li><a href="category.html" className="nav-link">Accessories</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}