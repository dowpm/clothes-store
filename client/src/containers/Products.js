import React, { Component } from 'react';
import LeftMenu from '../components/LeftMenu'
import BreadCumb from '../components/BreadCrumb'
import product1 from '../img/product1.jpg'
import product2 from '../img/product1_2.jpg'

export default class Products extends Component {
    render(){
        return(
            <React.Fragment>
                <BreadCumb title={'products'}/>

                <LeftMenu />

                <div className="col-lg-9">
                    <div className="box">
                        <h1>Ladies</h1>
                    </div>
                    <div className="box info-bar">
                        <div className="row">
                        <div className="col-md-12 col-lg-4 products-showing">Showing <strong>12</strong> of <strong>25</strong> products</div>
                        <div className="col-md-12 col-lg-7 products-number-sort">
                            <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                            <div className="products-number"><strong>Show</strong><button className="btn btn-sm btn-primary">12</button><button className="btn btn-outline-secondary btn-sm">24</button><span>products</span></div>
                            <div className="products-sort-by mt-2 mt-lg-0"><strong>Sort by</strong>
                                <select name="sort-by" className="form-control">
                                <option>Price</option>
                                <option>Name</option>
                                <option>Sales first</option>
                                </select>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="row products">

                        <div className="col-lg-4 col-md-6">
                            <div className="product">
                                <div className="flip-container">
                                <div className="flipper">
                                    <div className="front"><a href="detail.html"><img src={product1} alt="" className="img-fluid"/></a></div>
                                    <div className="back"><a href="detail.html"><img src={product2} alt="" className="img-fluid"/></a></div>
                                </div>
                                </div><a href="detail.html" className="invisible"><img src={product1} alt="" className="img-fluid"/></a>
                                <div className="text">
                                <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                                <p className="price"> 
                                    <del></del>$143.00
                                </p>
                                <p className="buttons"><a href="detail.html" className="btn btn-outline-secondary">View detail</a><a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a></p>
                                </div>
                                {/* <!-- /.text--> */}
                                <div className="ribbon sale">
                                    <div className="theribbon">SALE</div>
                                    <div className="ribbon-background"></div>
                                </div>
                                {/* <!-- /.ribbon--> */}
                                <div className="ribbon new">
                                    <div className="theribbon">NEW</div>
                                    <div className="ribbon-background"></div>
                                </div>
                                {/* <!-- /.ribbon--> */}
                                <div className="ribbon gift">
                                    <div className="theribbon">GIFT</div>
                                    <div className="ribbon-background"></div>
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