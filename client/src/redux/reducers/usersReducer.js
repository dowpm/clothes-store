const initialState = {
    currentUser: {},
    token: null,
    errors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
        console.log('inside sigup reducer')
        console.log(action)
        return {...state, currentUser: action.payload}

        case 'LOG_OUT':
        return {...state, currentUser: {}}

        default:
            return state
    }
}