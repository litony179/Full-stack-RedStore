import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import ProductGallery from './components/ProductsPage/ProductGallery/ProductGallery';
import { cartReducer } from './Reducers/AddToCart/cartReducers';
import { featuredProductReducer, recentProductReducer } from './Reducers/HomePage/productReducer';
import { featuredProductDetailsReducer } from './Reducers/ProductDetails/ProductDetailsReducer';
import { productsReducer } from './Reducers/ProductsPage/ProductsReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
};
const reducer = combineReducers({
    featuredProductList: featuredProductReducer,
    recentProductList: recentProductReducer,
    productDetails: featuredProductDetailsReducer,
    productGallery: productsReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;