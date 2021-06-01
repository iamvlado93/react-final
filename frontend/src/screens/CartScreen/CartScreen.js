import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../../actions/cartActions";

import "./index.css";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push("/shipping");
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h2>Shopping Cart</h2>
            <h2>Price:</h2>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>{item.name}</Link>
                  </div>
                  <button
                    type="button"
                    className="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    Delete
                  </button>
                  <h4>Qty: {item.qty}</h4>
                </div>

                <div className="cart-price">${item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h4>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :{" "}
          <span>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span>
        </h4>

        <button
          onClick={checkoutHandler}
          className="button primary"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
