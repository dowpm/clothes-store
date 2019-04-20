import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import product1 from '../img/product1.jpg'
import product2 from '../img/product1_2.jpg'

export default class AllProducts extends Component {
    render(){
        return(
            <React.Fragment>
            <div className="col-lg-12">
                {/* <!-- breadcrumb--> */}
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li aria-current="page" className="breadcrumb-item active">Ladies</li>
                </ol>
                </nav>
            </div>

            <div class="col-lg-12">
                <div class="box">
                    <h1>Ladies</h1>
                    <p>In our Ladies department we offer wide selection of the best products we have found and carefully selected worldwide.</p>
                </div>
                <div class="box info-bar">
                    <div class="row">
                    <div class="col-md-12 col-lg-4 products-showing">Showing <strong>12</strong> of <strong>25</strong> products</div>
                    <div class="col-md-12 col-lg-7 products-number-sort">
                        <form class="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                        <div class="products-number"><strong>Show</strong><a href="#" class="btn btn-sm btn-primary">12</a><a href="#" class="btn btn-outline-secondary btn-sm">24</a><a href="#" class="btn btn-outline-secondary btn-sm">All</a><span>products</span></div>
                        <div class="products-sort-by mt-2 mt-lg-0"><strong>Sort by</strong>
                            <select name="sort-by" class="form-control">
                            <option>Price</option>
                            <option>Name</option>
                            <option>Sales first</option>
                            </select>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div class="row products">

                    <div class="col-lg-3 col-md-4">
                        <div class="product">
                            <div class="flip-container">
                            <div class="flipper">
                                <div class="front"><a href="detail.html"><img src={product1} alt="" class="img-fluid"/></a></div>
                                <div class="back"><a href="detail.html"><img src={product2} alt="" class="img-fluid"/></a></div>
                            </div>
                            </div><a href="detail.html" class="invisible"><img src={product1} alt="" class="img-fluid"/></a>
                            <div class="text">
                            <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                            <p class="price"> 
                                <del></del>$143.00
                            </p>
                            <p class="buttons"><a href="detail.html" class="btn btn-outline-secondary">View detail</a><a href="basket.html" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a></p>
                            </div>
                            {/* <!-- /.text--> */}
                            <div class="ribbon sale">
                                <div class="theribbon">SALE</div>
                                <div class="ribbon-background"></div>
                            </div>
                            {/* <!-- /.ribbon--> */}
                            <div class="ribbon new">
                                <div class="theribbon">NEW</div>
                                <div class="ribbon-background"></div>
                            </div>
                            {/* <!-- /.ribbon--> */}
                            <div class="ribbon gift">
                                <div class="theribbon">GIFT</div>
                                <div class="ribbon-background"></div>
                            </div>
                            {/* <!-- /.ribbon--> */}
                        </div>
                        {/* <!-- /.product            --> */}
                    </div>
                    
                </div>
            </div>
            </React.Fragment>
        )
    }
}