const initialState = {
    products: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log(action)
            return {...state, products: action.payload}

        case 'ADD_PRODUCT':
        // console.log(action.payload)
            return {...state, products: [...state.products,action.payload]}

        default:
            return state
    }
}