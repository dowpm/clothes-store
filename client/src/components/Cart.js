import React, { Component } from 'react'

export default class AllProducts extends Component {
    render(){
        return(
            <React.Fragment>
            <div class="col-lg-12">
              {/* <!-- breadcrumb--> */}
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li aria-current="page" class="breadcrumb-item active">Shopping cart</li>
                </ol>
              </nav>
            </div>

            <div id="basket" class="col-lg-9">
                <div class="box">
                    <form method="post" action="checkout1.html">
                        <h1>Shopping cart</h1>
                        <p class="text-muted">You currently have 3 item(s) in your cart.</p>
                        <div class="table-responsive">
                            <table class="table">
                            <thead>
                                <tr>
                                <th colspan="2">Product</th>
                                <th>Quantity</th>
                                <th>Unit price</th>
                                <th>Discount</th>
                                <th colspan="2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><a href="#"><img src="img/detailsquare.jpg" alt="White Blouse Armani" /></a></td>
                                <td><a href="#">White Blouse Armani</a></td>
                                <td>
                                    <input type="number" value="2" class="form-control" />
                                </td>
                                <td>$123.00</td>
                                <td>$0.00</td>
                                <td>$246.00</td>
                                <td><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                <td><a href="#"><img src="img/basketsquare.jpg" alt="Black Blouse Armani" /></a></td>
                                <td><a href="#">Black Blouse Armani</a></td>
                                <td>
                                    <input type="number" value="1" class="form-control" />
                                </td>
                                <td>$200.00</td>
                                <td>$0.00</td>
                                <td>$200.00</td>
                                <td><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                <th colspan="5">Total</th>
                                <th colspan="2">$446.00</th>
                                </tr>
                            </tfoot>
                            </table>
                        </div>
                        {/* <!-- /.table-responsive--> */}
                        <div class="box-footer d-flex justify-content-between flex-column flex-lg-row">
                            <div class="left"><a href="category.html" class="btn btn-outline-secondary"><i class="fa fa-chevron-left"></i> Continue shopping</a></div>
                            <div class="right">
                            <button class="btn btn-outline-secondary"><i class="fa fa-refresh"></i> Update cart</button>
                            <button type="submit" class="btn btn-primary">Proceed to checkout <i class="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* ----------------Box-------------------- */}
                
            </div>

            {/* <!-- /.col-lg-9--> */}
            <div class="col-lg-3">
              <div id="order-summary" class="box">
                <div class="box-header">
                  <h3 class="mb-0">Order summary</h3>
                </div>
                <p class="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Order subtotal</td>
                        <th>$446.00</th>
                      </tr>
                      <tr>
                        <td>Shipping and handling</td>
                        <th>$10.00</th>
                      </tr>
                      <tr>
                        <td>Tax</td>
                        <th>$0.00</th>
                      </tr>
                      <tr class="total">
                        <td>Total</td>
                        <th>$456.00</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- /.col-md-3--> */}

            </React.Fragment>
        )
    }
}