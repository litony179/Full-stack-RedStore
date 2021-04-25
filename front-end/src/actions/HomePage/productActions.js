import Axios from "axios";
import {
    FEATURED_PRODUCT_LIST_FAIL,
    FEATURED_PRODUCT_LIST_REQUEST,
    FEATURED_PRODUCT_LIST_SUCCESS,
    RECENT_PRODUCT_LIST_FAIL,
    RECENT_PRODUCT_LIST_REQUEST,
    RECENT_PRODUCT_LIST_SUCCESS
} from "../../constants/HomePage/productConstants"

export const featuredListProducts = () => async(dispatch) => {
    dispatch({
        type: FEATURED_PRODUCT_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get("/api/products");
        dispatch({ type: FEATURED_PRODUCT_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: FEATURED_PRODUCT_LIST_FAIL, payload: err.message });
    }
}

export const recentListProducts = () => async(dispatch) => {
    dispatch({
        type: RECENT_PRODUCT_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/recentProducts');
        dispatch({ type: RECENT_PRODUCT_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: RECENT_PRODUCT_LIST_FAIL, payload: err.message });
    }
}