const {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    RECENT_PRODUCT_DETAILS_FAIL,
    RECENT_PRODUCT_DETAILS_REQUEST,
    RECENT_PRODUCT_DETAILS_SUCCESS
} = require("../../constants/ProductDetailsPage/ProductDetailsConstants");

export const featuredProductDetailsReducer = (state = { product: {}, loader: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loader: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loader: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loader: false, error: action.payload }
        default:
            return state;
    }
}

export const recentProductDetailsReducer = (state = { recentProduct: {}, recentLoader: true }, action) => {
    switch (action.type) {
        case RECENT_PRODUCT_DETAILS_REQUEST:
            return { recentLoader: true };
        case RECENT_PRODUCT_DETAILS_SUCCESS:
            return { recentLoader: false, recentProduct: action.payload };
        case RECENT_PRODUCT_DETAILS_FAIL:
            return { recentLoader: false, recentError: action.payload }
        default:
            return state;
    }
}