import React from 'react'

const AdminProducts = ({products}) => {
    const pr = products.map(p => {
        // debugger
        return<tr key={p.id}>
            <td>{p.name}</td>
            <td>${p.price}.00</td>
            <td>{p.section}</td>
            <td>{p.category_id}</td>
            <td>--</td>
        </tr>
    })
    // debugger
    return(
        <div className="col-lg-9">
            <div className="card">
                <div className="card-header">
                    <strong className="card-title">Products</strong>
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