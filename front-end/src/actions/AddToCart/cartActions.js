import { CART_ADD_ITEM } from "../../constants/AddToCart/cartConstants";
import Axios from 'axios';

export const addToCart = (productId, qty) => async(dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            inventory: data.inventory,
            product: data._id,
            qty,
        },
    })
}