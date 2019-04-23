const host = "http://localhost:3000"

export const signUp = userState => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'})
        return fetch(host+'/users',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userState})
        })
        .then(res =>{
            if(!res.ok){
                console.log('error')
            }
            return res.json()
        }).then(json => console.log(json))
    }
}