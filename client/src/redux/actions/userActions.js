import { error, success} from '../../helpers/notifications'
import {handleAjaxError} from '../../helpers/helpers'
import swal from 'sweetalert';
import loading from '../../img/loading.gif'

const host = "http://localhost:3001/api/v1/"

export const signUp = (user, cb, cb2) => {
    
    return (dispatch) => {
        dispatch({type: 'PUSHING_DATA'})
        return fetch(host+'users',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res =>{
            // if(!res.ok){
            //     console.log('error')
            // }
            return res.json()
        }).then(user => {
            if(user.error){
                error(user.keys+' '+user.errors)
                dispatch({type: "GETTING_DATA_FAILED"})
            }else{                    
                dispatch({type: "SIGNUP", payload: user})
                // swal(` U're login`, {
                //     icon: "success",
                //     });
                success('You\'re signedup and loggedin')
                    cb()
                    cb2()
            }
        }).catch(err => {
            handleAjaxError(err)
        })
    }
}

export const logIn = (user, cb, cb2) => {
    
    return (dispatch) => {
        dispatch({type: 'REQUEST_LOGIN'})
        return fetch(host+'login',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res =>res.json())
        .then(user => {
            if(user.error){
                swal('Error',user.error_msg,'error')
                dispatch({type: "FAILED_LOGIN"})
            }else{                    
                dispatch({type: "LOG_IN", payload: user})
                success('You\'re loggedin')
                    cb();
                    cb2();
            }
        })
    }
}