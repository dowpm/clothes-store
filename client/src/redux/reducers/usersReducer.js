const initialState = {
    currentUser: {},
    token: null,
    errors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_SUCCESS':
        console.log('inside sigup reducer')
        console.log(action)
        return {...state, users: action.payload}

        case 'AUTHENTICATION_FAILURE':
        return {}

        default:
            return state
    }
}