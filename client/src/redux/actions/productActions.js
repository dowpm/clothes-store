import {success, error} from '../../helpers/notifications'
import {handleAjaxError} from '../../helpers/helpers'

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
    formdata.append('category_id', product.category_id)
    formdata.append('user_id', product.user_id)
    
    return (dispatch) => {
        dispatch({type: 'START_SUBMITTING_DATA'})

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
                    success('Product Added!');
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
    formdata.append('category_id', product.category_id)
    formdata.append('user_id', product.user_id)
    
    return (dispatch) => {
        dispatch({type: 'START_SUBMITTING_DATA'})

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
                    success('Product has been updated!');
                }
            })
            .catch(err => {
                handleAjaxError(err)           
            })
    }
}