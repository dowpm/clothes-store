const initialState = {
    products: [],
    size: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.payload, size: 1}

        case 'ADD_PRODUCT':
            return {...state, products: [...state.products,action.payload], size: 1}

        case 'UPDATE_PRODUCT':
            return {...state,size:1, products: state.products.map(product => {
                if(product.id === action.payload.id){
                    return action.payload
                }else{
                    return product
                }
            })}

        case 'DELETE_PRODUCT':
            return {...state, products: state.products.filter(p => {
                return p.id !== action.payload
            }), size: 1}

        case 'SORT_PRODUCTS':
            let products, size;
            switch (Number(action.payload)){
                case 0:
                products = state.products.sort((a,b)=> ('' + a.name).localeCompare(b.name))
                size = 3
                break

                case 1:
                products = state.products.sort((a,b)=> a.price - b.price)
                size = 4
                break

                case 2:
                products = state.products.sort((a,b)=> b.price - a.price)
                size = 5
                break

                case 3:
                products = state.products.sort((a,b)=> ('' + b.name).localeCompare(a.name))
                size = 6
                break

                default:
                products = state.products
                break
            }
            return {
                ...state,size,
                products: products
            }

        case 'LOADING_PRODUCTS':
            return {...state, size: 2}

        default:
            return state
    }
}