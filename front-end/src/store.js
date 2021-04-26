import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/AddToCart/cartReducers';
import { featuredProductReducer, recentProductReducer } from './Reducers/HomePage/productReducer';
import { featuredProductDetailsReducer } from './Reducers/ProductDetails/ProductDetailsReducer';

const initialState = {};
const reducer = combineReducers({
    featuredProductList: featuredProductReducer,
    recentProductList: recentProductReducer,
    productDetails: featuredProductDetailsReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;