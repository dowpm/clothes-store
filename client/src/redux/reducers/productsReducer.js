const initialState = {
    products: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log(action)
            return {...state, products: action.payload}

        case 'ADD_PRODUCTS':
            return {...state, products: state.products.append(action.payload)}

        default:
            return state
    }
}