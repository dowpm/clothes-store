import React from 'react'
import product1 from '../img/product1.jpg'
import product2 from '../img/product1_2.jpg'

import { Link } from 'react-router-dom'

const ProductDetail = ({product}) => {
    if(!product) return <h2>Product Not Found</h2>
    let images
    if(product.images_url.length === 0){
        images = [product1, product2]
    }else{
        images = product.images_url.map(i => 'http://localhost:3001'+i)
    }

    return(
        <React.Fragment>
        <div className="col-lg-12">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                <li aria-current="page" className="breadcrumb-item active">{product.name}</li>
            </ol>
            </nav>
        </div>
        <div className="col-lg-3 order-2 order-lg-1"></div>

        <div className="col-lg-9 order-1 order-lg-2">
        <div id="productMain" className="row">
            <div className="col-md-6">
                <div data-slider-id="1" className="owl-carousel shop-detail-carousel">
                <div className="item"> <img src={images[0]} alt="" className="img-fluid"/></div>
                </div>
                
            </div>
            <div className="col-md-6">
                <div className="box">
                <h1 className="text-center">White Blouse Armani</h1>
                <p className="goToDescription">{product.description}</p>
                <p className="price">$124.00</p>
                
                </div>
                <div data-slider-id="1" className="owl-thumbs">
                <button className="owl-thumb-item"><img src={images[0]} alt="" className="img-fluid"/></button>
                <button className="owl-thumb-item"><img src={images[1]} alt="" className="img-fluid"/></button>
                <button className="owl-thumb-item"><img src={images[2]} alt="" className="img-fluid"/></button>
                </div>
            </div>
        </div>
        
        
        </div>

        
        </React.Fragment>

    )
}

export default ProductDetail