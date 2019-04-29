import React from 'react';
import {Switch } from 'react-router-dom'
import PropsRoute from '../PropsRoute';
import ProductForm from '../components/ProductForm'

class Admin extends React.Component {


    render(){
        return(
            <React.Fragment>
                <Switch>
                    <PropsRoute 
                    path="/Products/new" 
                    component={ProductForm} 
                    onSubmit={this.addEvent}
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

export default Admin