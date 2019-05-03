import React from 'react'
import { Link } from 'react-router-dom'

 const UserLeftMenu = ({item}) => {
    
    return(
        <div className="col-lg-3" >
            <div className="card sidebar-menu">
                <div className="card-header">
                <h3 className="h4 card-title">Management section</h3>
                </div>
                <div className="card-body">
                <ul className="nav nav-pills flex-column">
                    {/* <a href="/admin/products" className={item === '/admin/products'?"nav-link active ": "nav-link "}><i className="fa fa-list"></i> Products</a> */}
                    <Link to="/admin/products" className={item === '/admin/products'?"nav-link active ": "nav-link "}><i className="fa fa-list"></i> Products</Link>
                    {/* <a href="customer-account.html" className="nav-link"><i className="fa fa-user"></i> My account</a> */}
                    {/* <a href="/admin/products/new" className={item === '/admin/products/new'? "nav-link active ": "nav-link "}><i className="fa fa-plus"></i> New product</a> */}
                    <Link to="/admin/products/new" className={item === '/admin/products/new'? "nav-link active ": "nav-link "}><i className="fa fa-plus"></i> New product</Link>
                </ul>
                </div>
            </div>
        </div>
    )
    
}

export default UserLeftMenu