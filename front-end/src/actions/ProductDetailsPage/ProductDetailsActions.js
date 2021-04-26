import Axios from 'axios';

import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    RECENT_PRODUCT_DETAILS_FAIL,
    RECENT_PRODUCT_DETAILS_REQUEST,
    RECENT_PRODUCT_DETAILS_SUCCESS
} from '../../constants/ProductDetailsPage/ProductDetailsConstants';

export const detailsFeatureProduct = (productId) => async(dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productId
    });

    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
    }
}