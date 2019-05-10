const initialState = {
    currentUser: {},
    token: null,
    errors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STORAGE':
        return {...state, currentUser: JSON.parse(localStorage.getItem('current_user'))}
        
        case 'LOG_IN':
        localStorage.setItem('current_user', JSON.stringify(action.payload));
        return {...state, currentUser: action.payload}

        case 'LOG_OUT':
        localStorage.removeItem('current_user');
        return {...state, currentUser: {}}

        case 'SIGNUP':
        localStorage.setItem('current_user', JSON.stringify(action.payload));
        return {...state, currentUser: action.payload}

        default:
            return state
    }
}