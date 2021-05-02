import Axios from 'axios';
import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from '../../constants/ProductsPage/ProductConstants';

export const productsGallery = () => async(dispatch) => {
    dispatch({
        type: PRODUCTS_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: PRODUCTS_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: PRODUCTS_FAIL, payload: err.message })
    }
}