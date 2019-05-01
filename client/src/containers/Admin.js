import React from 'react';
import {Switch } from 'react-router-dom'
import PropsRoute from '../PropsRoute';
import ProductForm from '../components/ProductForm'
import UserLeftMenu from '../components/UserLeftMenu'
import { connect } from 'react-redux'
import { addProduct } from '../redux/actions/productActions'

class Admin extends React.Component {

    onSubmitProduct = (product) => {
        this.props.addProduct(product)
    }
    render(){
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
                    {/* <PropsRoute
                    exact
                    path="/events/:id/edit"
                    component={ProductForm}
                    event={event}
                    onSubmit={this.updateEvent}
                    />
                    <PropsRoute
                    path="/events/:id"
                    component={Event}
                    event={event}
                    onDelete={this.deleteEvent}
                    /> */}
                </Switch>
            </React.Fragment>
        )
    }
}

export default connect(state => ({products: state.products }),{addProduct})(Admin)