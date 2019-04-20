import React, { Component } from 'react'

export default class UserLeftMenu extends Component{

    render(){
        return(
            <div class="col-lg-3">
                <div class="card sidebar-menu">
                    <div class="card-header">
                    <h3 class="h4 card-title">Customer section</h3>
                    </div>
                    <div class="card-body">
                    <ul class="nav nav-pills flex-column">
                        <a href="customer-orders.html" class="nav-link active"><i class="fa fa-list"></i> My orders</a>
                        <a href="customer-account.html" class="nav-link"><i class="fa fa-user"></i> My account</a>
                        <a href="index.html" class="nav-link"><i class="fa fa-sign-out"></i> Logout</a>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}