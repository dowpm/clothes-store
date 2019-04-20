import React, { Component } from 'react';
import UserLeftMenu from './UserLeftMenu'

export default class Orders extends Component {
    
    render(){
        return(
            <div id="all">
                <div id="content">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!-- breadcrumb--> */}
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li aria-current="page" class="breadcrumb-item active">My orders</li>
                                </ol>
                            </nav>
                        </div>
                        
                        <UserLeftMenu />

                        <div id="customer-orders" class="col-lg-9">
                            <div class="box">
                                <h1>My orders</h1>
                                <p class="lead">Your orders on one place.</p>
                                <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                                <hr/>

                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td><span class="badge badge-info">Being prepared</span></td>
                                            <td><a href="customer-order.html" class="btn btn-primary btn-sm">View</a></td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td><span class="badge badge-info">Being prepared</span></td>
                                            <td><a href="customer-order.html" class="btn btn-primary btn-sm">View</a></td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td><span class="badge badge-success">Received</span></td>
                                            <td><a href="customer-order.html" class="btn btn-primary btn-sm">View</a></td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td><span class="badge badge-danger">Cancelled</span></td>
                                            <td><a href="customer-order.html" class="btn btn-primary btn-sm">View</a></td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td><span class="badge badge-warning">On hold</span></td>
                                            <td><a href="customer-order.html" class="btn btn-primary btn-sm">View</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}