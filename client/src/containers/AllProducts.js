import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts, sortProducts } from '../redux/actions/productActions'
import {Switch } from 'react-router-dom'
import PropsRoute from '../PropsRoute';
import ShowProducts from '../components/ShowProducts'
import ProductDetail from '../components/ProductDetail'
import loading from '../img/loading.gif'

class AllProducts extends Component {

    componentDidMount() {
        if(this.props.size === null){
            this.props.getProducts()
        }
    }

    sortBy = (val) => {
        const {products} = this.props
        if(products.length === 0){
            return null
        }

        this.props.sortProducts(val)
    }

    render(){
        const { products, match, size } = this.props
        if (size === 2) return <img src={loading} alt="loading"/>;
        if (size === null) return null;

        const productId = match.params.id;
        const product = products.find(p => p.id === Number(productId));
        
        return(
            <React.Fragment>
            
            <Switch>
                <PropsRoute
                exact
                path="/products" 
                component={ShowProducts} 
                products={products}
                sort={this.sortBy}
                />
                <PropsRoute
                path="/products/:id" 
                component={ProductDetail} 
                product={product}
                />
            </Switch>
            
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({products: state.products.products, size: state.products.size }),
    {getProducts, sortProducts}
)(AllProducts)