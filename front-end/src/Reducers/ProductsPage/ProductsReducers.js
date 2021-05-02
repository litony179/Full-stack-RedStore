const { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL } = require("../../constants/ProductsPage/ProductConstants");

export const productsReducer = (state = { loader: true, products: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return { loader: true };
        case PRODUCTS_SUCCESS:
            return { loader: false, products: action.payload };
        case PRODUCTS_FAIL:
            return { loader: false, error: action.payload };
        default:
            return state
    }
}