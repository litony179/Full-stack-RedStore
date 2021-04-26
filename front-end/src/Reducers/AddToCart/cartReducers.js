import { CART_ADD_ITEM } from "../../constants/AddToCart/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            // This adds the item that the user chose to the cart
            const item = action.payload;

            // This checks the whether if the product is already in the cart
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x),
                }
            }

            return {
                ...state,
                cartItems: [...state.cartItems, item],
            };

        default:
            return state;
    }
}