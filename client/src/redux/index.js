import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import products from './reducers/productsReducer'
import users from './reducers/usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    products,
    users
})

export default createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
  )