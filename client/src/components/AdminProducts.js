import React from 'react'
import {Link } from 'react-router-dom'

const AdminProducts = ({products, onDelete}) => {
    const pr = products.map(p => {
        // debugger
        return<tr key={p.id}>
            <td>{p.name}</td>
            <td>${p.price}.00</td>
            <td>{p.section}</td>
            <td>{p.category_name}</td>
            <td>
                <Link to={'products/'+p.id+`/edit`}><i className="fa fa-pencil"></i></Link>
                <Link to='' onClick={(e) => onDelete(e,p)}><i className="fa fa-trash"></i></Link>            
            </td>
        </tr>
    })
    // debugger
    return(
        <div className="col-lg-9">
            <div className="card">
                <div className="card-header">
                    <strong className="card-title">{products.length === 0? <h2>No Products Yet</h2>:'Products'}</strong>
                </div>
                <div className="card-body">
                    <table id="bootstrap-data-table" className="table table-striped table-bordered ">
                        <thead className="thead-dark">
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Section</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {pr}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminProducts