const {
    FEATURED_PRODUCT_LIST_REQUEST,
    FEATURED_PRODUCT_LIST_SUCCESS,
    FEATURED_PRODUCT_LIST_FAIL,
    RECENT_PRODUCT_LIST_REQUEST,
    RECENT_PRODUCT_LIST_SUCCESS,
    RECENT_PRODUCT_LIST_FAIL
} = require("../../constants/HomePage/productConstants");

export const featuredProductReducer = (state = { loader: true, products: [] }, action) => {
    switch (action.type) {
        case FEATURED_PRODUCT_LIST_REQUEST:
            return { loader: true };
        case FEATURED_PRODUCT_LIST_SUCCESS:
            return { loader: false, products: action.payload };
        case FEATURED_PRODUCT_LIST_FAIL:
            return { loader: false, error: action.payload };
        default:
            return state
    }
}

export const recentProductReducer = (state = { loader: true, recentProducts: [] }, action) => {
    switch (action.type) {
        case RECENT_PRODUCT_LIST_REQUEST:
            return { loader: true };
        case RECENT_PRODUCT_LIST_SUCCESS:
            return { loader: false, recentProducts: action.payload };
        case RECENT_PRODUCT_LIST_FAIL:
            return { loader: false, error: action.payload };
        default:
            return state;
    }
}