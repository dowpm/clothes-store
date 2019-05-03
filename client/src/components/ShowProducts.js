import React from 'react'
import Product from './Product'
import BreadCumb from './BreadCrumb'

const ShowProducts = ({products, sort}) => {
    const productLength = products.length
    // if(productLength < 1) return null;
    const renderProducts = products.map(p => <Product key={p.id} product={p} /> )
    

    const storBy = (e) => {
        const val = e.target.value
        if(val === ''){
            return null
        }
        sort(val)
    }

    return(
        <React.Fragment>
        <BreadCumb title={'products'}/>

        <div className="col-lg-12">
            
            {(productLength > 0 )?
            <React.Fragment>
            <div className="box">
                <h1>All Products</h1>
            </div>
            <div className="box info-bar">
                <div className="row">
                <div className="col-md-12 col-lg-4 products-showing">Showing <strong>{productLength}</strong> products</div>
                <div className="col-md-12 col-lg-7 products-number-sort">
                    <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                    {/* <div className="products-number"><strong>Show</strong><a href="#" className="btn btn-sm btn-primary">12</a><a href="#" className="btn btn-outline-secondary btn-sm">24</a><a href="#" className="btn btn-outline-secondary btn-sm">All</a><span>products</span></div> */}
                    <div className="products-sort-by mt-2 mt-lg-0"><strong>Sort by</strong>
                        <select name="sort-by" className="form-control" onChange={storBy}>
                        <option value='0'>Name- Asc</option>
                        <option value='3'>Name- Dec</option>
                        <option value='1'>Price- Low to hight</option>
                        <option value='2'>Price- Hight to low</option>
                        </select>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="row products">
                {renderProducts}
                
            </div>
            </React.Fragment>

            :   <div className="box">
                <h1>No Products yet</h1>
                </div>}
        </div>
        </React.Fragment>
    )
    }

export default ShowProducts