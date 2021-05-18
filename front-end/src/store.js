import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import ProductGallery from './components/ProductsPage/ProductGallery/ProductGallery';
import { cartReducer } from './Reducers/AddToCart/cartReducers';
import { featuredProductReducer, recentProductReducer } from './Reducers/HomePage/productReducer';
import { featuredProductDetailsReducer } from './Reducers/ProductDetails/ProductDetailsReducer';
import { productsReducer } from './Reducers/ProductsPage/ProductsReducers';
import { userSignInReducer } from './Reducers/SignInCard/userReducers';

const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
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
    userSignIn: userSignInReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;