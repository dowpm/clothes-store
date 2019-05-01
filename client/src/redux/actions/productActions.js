import {success, error} from '../../helpers/notifications'
import {handleAjaxError} from '../../helpers/helpers'

const host = "http://localhost:3001"

export const addProduct = (product) => {
    let formdata = new FormData()
    // console.log(product.images[0]);
    Array.prototype.forEach.call(product.images, (img) => {
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

        return fetch(`${host}/api/v1/products`,{
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