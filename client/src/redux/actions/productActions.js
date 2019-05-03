import { error} from '../../helpers/notifications'
import {handleAjaxError} from '../../helpers/helpers'
import swal from 'sweetalert';
import loading from '../../img/loading.gif'

const host = "http://localhost:3001/api/v1/"

export const getProducts = () => {

    return dispatch => {
        dispatch({type: "LOADING_PRODUCTS"})

        return fetch(`${host}products`)
            .then(res => res.json())
            .then(products => {
                if(products.status === 500){
                    error(products.error)
                    dispatch({type: "GETTING_DATA_FAILED"})
                }else{                    
                    dispatch({type: "GET_PRODUCTS", payload: products})
                }
            } )
            .catch(err => {
                handleAjaxError(err)
            })
    }
}

export const addProduct = (product) => {
    let formdata = new FormData()
    // console.log(product.images[0]);
    Array.prototype.forEach.call(product.uploadImages, (img) => {
    formdata.append('images[]',img,img.name)
    })
    formdata.append('name',product.name)
    formdata.append('description', product.description)
    formdata.append('price', product.price)
    formdata.append('section', product.section)
    formdata.append('category_name', product.category_name)
    // formdata.append('user_id', product.user_id)
    
    return (dispatch) => {
        dispatch({type: 'START_SUBMITTING_DATA'})
        swal({icon: loading,});

        return fetch(`${host}products`,{
            method: 'POST',
            body: formdata,
            })
            .then(res => res.json())
            .then(product =>{
                if(product.error){
                    // handleError
                    dispatch({type: 'SUBMITTING_DATA_FAILED'})
                    error('Someting params are missing!!')
                }else{
                    dispatch({type: 'ADD_PRODUCT', payload: product})
                    // success('Product Added!');
                    swal(` Product ${product.name} Added!`, {
                        icon: "success",
                        });
                }
            })
            .catch(err => {
                handleAjaxError(err)           
            })
    }
    
}

export const updateProduct = (product) => {
    let formdata = new FormData()
    // console.log(product.images[0]);
    if(product.uploadImages.length > 0){
        Array.prototype.forEach.call(product.uploadImages, (img) => {
        formdata.append('images[]',img,img.name)
    })}

    formdata.append('name',product.name)
    formdata.append('description', product.description)
    formdata.append('price', product.price)
    formdata.append('section', product.section)
    formdata.append('category_name', product.category_name)
    // formdata.append('user_id', product.user_id)
    
    return (dispatch) => {
        dispatch({type: 'START_SUBMITTING_DATA'})
        swal({icon: loading,});

        return fetch(`${host}products/${product.id}`,{
            method: 'PUT',
            body: formdata,
            })
            .then(res => res.json())
            .then(product =>{
                if(product.error){
                    // handleError
                    dispatch({type: 'SUBMITTING_DATA_FAILED'})
                    if(product.status === 404){
                        error('Server error!! '+product.error)
                        // console.log(error)
                    }else{
                        error('Someting params are missing!!')
                    }
                    
                }else{
                    dispatch({type: 'UPDATE_PRODUCT', payload: product})
                    // success('Product has been updated!');
                    swal(` Product ${product.name} has been updated!`, {
                        icon: "success",
                        });
                }
            })
            .catch(err => {
                handleAjaxError(err)           
            })
    }
}

export const sortProducts = (val) => {
    return {type: 'SORT_PRODUCTS', payload: val}
}

export const deleteProduct = (product) => {
    
    return (dispatch) => {
        dispatch({type: 'DELETE_REQUEST'})
        // dispatch({type:'DELETE_PRODUCT', payload: product.id})
        swal({icon: loading,});

        return fetch(`${host}products/${product.id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(json => {
            if(!json.error){
                swal(`Poof! Product ${product.name} has been deleted!`, {
                    icon: "success",
                    });
                dispatch({type:'DELETE_PRODUCT', payload: product.id})
            }
        })
    }
}