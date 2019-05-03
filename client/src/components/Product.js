import React from 'react'
import { Link } from 'react-router-dom'

import product1 from '../img/product1.jpg'
import product2 from '../img/product1_2.jpg'

const Product = ({product}) => {
    // debugger
    if(!product.images_url)return null;
    let images
    if(product.images_url.length === 0){
        images = [product1, product2]
    }else{
        images = product.images_url.map(i => 'http://localhost:3001'+i)
    }
    return(
        <div className="col-lg-3 col-md-4">
            <div className="product">
                <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                    {/* <a href={`/products/${product.id}`}><img src={images[0]} alt="oups" className="img-fluid"/></a> */}
                    <Link to={`/products/${product.id}`}><img src={images[0]} alt="oups" className="img-fluid"/></Link>
                </div>
                    <div className="back">
                    {/* <a href={`/products/${product.id}`}><img src={images[1]} alt="" className="img-fluid"/></a> */}
                    <Link to={`/products/${product.id}`}><img src={images[1]} alt="oups" className="img-fluid"/></Link>
                    </div>
                </div>
                </div>
                {/* <a href={`/products/${product.id}`} className="invisible"><img src={product1} alt="oups" className="img-fluid"/></a> */}
                <Link to={`/products/${product.id}`} className="invisible"><img src={product1} alt="oups" className="img-fluid"/></Link>
                <div className="text">
                <h3>
                    {/* <a href={`/products/${product.id}`}>{product.name}</a> */}
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="price"> 
                    <del></del>${product.price}.00
                </p>
                <p className="buttons">
                {/* <a href={`/products/${product.id}`} className="btn btn-outline-secondary">View detail</a> */}
                <Link to={`/products/${product.id}`} className="btn btn-outline-secondary">View detail</Link>
                </p>
                </div>
                {/* <!-- /.text--> */}
                {/* <div className="ribbon sale">
                    <div className="theribbon">SALE</div>
                    <div className="ribbon-background"></div>
                </div> */}
                {/* <!-- /.ribbon--> */}
                {/* <div className="ribbon new">
                    <div className="theribbon">NEW</div>
                    <div className="ribbon-background"></div>
                </div> */}
                {/* <!-- /.ribbon--> */}
                {/* <div className="ribbon gift">
                    <div className="theribbon">GIFT</div>
                    <div className="ribbon-background"></div>
                </div> */}
                {/* <!-- /.ribbon--> */}
            </div>
            {/* <!-- /.product            --> */}
        </div>
    )
}

export default Product