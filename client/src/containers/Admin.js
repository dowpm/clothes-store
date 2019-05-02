import React from 'react';
import {Switch } from 'react-router-dom'
import PropsRoute from '../PropsRoute';
import ProductForm from '../components/ProductForm'
import AdminProducts from '../components/AdminProducts'
import UserLeftMenu from '../components/UserLeftMenu'
import { connect } from 'react-redux'
import { addProduct, getProducts, updateProduct } from '../redux/actions/productActions'
import loading from '../img/loading.gif'

class Admin extends React.Component {

    componentDidMount() {
        if(this.props.products.length === 0){
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
    render(){
        // debugger
        const {products, match} = this.props;
        
        if (products.length === 0) return <img src={loading} alt="loading"/>;

        const productId = match.params.id;
        const product = products.find(p => p.id === Number(productId) && p.user_id === 1);
        
        return(
            <React.Fragment>
                <div className="col-lg-12">
                {/* <!-- breadcrumb--> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li aria-current="page" className="breadcrumb-item">title</li>
                    </ol>
                </nav>
                </div>

                <UserLeftMenu admin={true}/>

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
                    onDelete={this.deleteEvent}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({products: state.products.products }),
    {addProduct, getProducts, updateProduct}
)(Admin)