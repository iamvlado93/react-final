import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";

import "./index.css";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems, shipping, payment } = cart;

  if (!shipping.address) {
    props.history.push("/shipping");
  }

  if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  // const checkoutHandler = () => {
  //   props.history.push("/shipping");
  // };

  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, qty));
  //   }
  // }, []);

  return (
    <div className="placeorder">
      <div className="placeorder-info">
        <div className="placeorder-body">
          <div>
            <h3>Shipping: </h3>
            <div>
              Address: {cart.shipping.address}, City: {cart.shipping.city},
              Country: {cart.shipping.country}, Postal Code:{" "}
              {cart.shipping.postal}
            </div>
          </div>
          <div>
            <h3>Payment: </h3>
            <div>Payment method: {cart.payment.paymentMethod}</div>
          </div>
        </div>
        <div>
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
                    <h4>Qty: {item.qty}</h4>
                  </div>
                  <div className="cart-price">${item.price}</div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="placeorder-action">
        <h4>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :
          <span>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span>
        </h4>
        <button className="button primary" disabled={cartItems.length === 0}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
