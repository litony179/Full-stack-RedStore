import Axios from 'axios';
import { PRODUCTS_REQUEST } from '../../constants/ProductsPage/ProductConstants';

export const productsCards = () => async(dispatch) => {
    dispatch({
        type: PRODUCTS_REQUEST
    });

    try {

    } catch (err) {

    }
}