import React, { useEffect } from "react";
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/AddToCart/cartActions";
import NavBar from "../../components/Utilities/NavBar/NavBar";
import Footer from '../../components/Utilities/Footer/Footer';
import MessageBox from '../../components/Utilities/MessageBox/MessageBox';
import './CartPage.css';

function CartPage(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  }

  return (
    <div>
      <div className="cart-page-nav">
        <NavBar></NavBar>
      </div>
      
      <div className="items-container">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
        <MessageBox>
          Cart is Empty. 
          <Link to="/">Go shippong</Link>
        </MessageBox>) : (
          <ul>
            <div className="cart-categories">
              <h4 className="cart-product">Product</h4>
              <h4 className="cart-details">Details</h4>
              <h4 className="cart-quantity">Quantity</h4>
              <h4 className="cart-subtotal">Subtotal</h4>
            </div>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="cart-row">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} className="cart-img-small"></img>
                  </div>

                  <div className="cart-product-name">
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                    <div>
                      product price: ${item.price}
                    </div>
                    <div>
                      <button className="cart-product-remove-button" type="button" onClick={() => removeFromCartHandler(item.product)}>Remove</button>
                    </div> 
                  </div>

                  <div className="cart-item-quantity">
                    <select value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                      {
                        [...Array(item.inventory).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="cart-item-subtotal">
                      <p>${item.price * item.qty}</p>
                  </div>  
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* This is the cart action box */}
        <div className='cart-action'>
          <div className="cart-action-card cart-action-body">
            <ul>
              <li className="cart-action-total">
                <p>Total Spent</p>
                <h4>${cartItems.reduce((a,c) => a + c.price * c.qty, 0)}</h4>
              </li>
              <li>
                <button type="button" onClick={checkoutHandler} className="btn cart-action-btn" diabled={cartItems.length === 0}>
                  Proceed to Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div>
        <Footer className="cart-footer"></Footer>
      </div>
      
    </div>
    
  );
}

export default withRouter(CartPage);
