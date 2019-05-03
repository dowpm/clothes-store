import React from 'react';
import {Switch } from 'react-router-dom'
import PropsRoute from '../PropsRoute';
import ProductForm from '../components/ProductForm'
import AdminProducts from '../components/AdminProducts'
import UserLeftMenu from '../components/UserLeftMenu'
import { connect } from 'react-redux'
import { addProduct, getProducts, updateProduct, deleteProduct } from '../redux/actions/productActions'
import loading from '../img/loading.gif'
import swal from 'sweetalert';

class Admin extends React.Component {

    componentDidMount() {
        if(this.props.size === null){
            this.props.getProducts()
        }
    }

    onSubmitProduct = (product) => {
        this.props.addProduct(product)
        const { history } = this.props;
        history.push(`/admin/products`);
    }

    onUpdateProduct = (product) => {
        this.props.updateProduct(product)
        const { history } = this.props;
        history.push(`/admin/products`);
    }
    
    onDeleteProduct = (e,product) =>{
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover it!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            
            this.props.deleteProduct(product)
        } else {
            swal(`Product ${product.name} is safe!`);
        }
        });
    }

    render(){
        // debugger
        const {products, match, size} = this.props;
        if (size === null) return <img src={loading} alt="loading"/>;
        // if (products.length === 0) return <img src={loading} alt="loading"/>;

        const productId = match.params.id;
        const product = products.find(p => p.id === Number(productId) );
        
        return(
            <React.Fragment>
                {/* <div className="col-lg-12"> */}
                {/* <!-- breadcrumb--> */}
                {/* <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li aria-current="page" className="breadcrumb-item">title</li>
                    </ol>
                </nav>
                </div> */}

                <UserLeftMenu item={match.url}/>

                <Switch>
                    <PropsRoute 
                    path="/admin/products/new" 
                    component={ProductForm} 
                    onSubmit={this.onSubmitProduct}
                    />

                    <PropsRoute
                    exact
                    path="/admin/products/:id/edit"
                    component={ProductForm}
                    product={product}
                    onSubmit={this.onUpdateProduct}
                    />

                    <PropsRoute
                    exact
                    path="/admin/products"
                    component={AdminProducts}
                    products={products}
                    onDelete={this.onDeleteProduct}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({products: state.products.products, size: state.products.size }),
    {addProduct, getProducts, updateProduct, deleteProduct}
)(Admin)