import React from 'react'
import { withRouter } from 'react-router'

function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    console.log(qty);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : productID: {productId} Qty: {qty}</p>
        </div>
    );
}

export default withRouter(CartPage);
