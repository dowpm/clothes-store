import React, { Component } from 'react';

export default class LeftMenu extends Component {
    render(){
        return(
            <div class="col-lg-3">
            {/* <!--
            *** MENUS AND FILTERS ***
            _________________________________________________________
            --> */}

                <div class="card sidebar-menu mb-4">
                    <div class="card-header">
                    <h3 class="h4 card-title">Categories</h3>
                    </div>
                    <div class="card-body">
                    <ul class="nav nav-pills flex-column category-menu">
                        <li><a href="category.html" class="nav-link">Men <span class="badge badge-secondary">42</span></a>
                        <ul class="list-unstyled">
                            <li><a href="category.html" class="nav-link">T-shirts</a></li>
                            <li><a href="category.html" class="nav-link">Shirts</a></li>
                            <li><a href="category.html" class="nav-link">Pants</a></li>
                            <li><a href="category.html" class="nav-link">Accessories</a></li>
                        </ul>
                        </li>
                        <li><a href="category.html" class="nav-link active">Ladies  <span class="badge badge-light">123</span></a>
                        <ul class="list-unstyled">
                            <li><a href="category.html" class="nav-link">T-shirts</a></li>
                            <li><a href="category.html" class="nav-link">Skirts</a></li>
                            <li><a href="category.html" class="nav-link">Pants</a></li>
                            <li><a href="category.html" class="nav-link">Accessories</a></li>
                        </ul>
                        </li>
                        <li><a href="category.html" class="nav-link">Kids  <span class="badge badge-secondary">11</span></a>
                        <ul class="list-unstyled">
                            <li><a href="category.html" class="nav-link">T-shirts</a></li>
                            <li><a href="category.html" class="nav-link">Skirts</a></li>
                            <li><a href="category.html" class="nav-link">Pants</a></li>
                            <li><a href="category.html" class="nav-link">Accessories</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}