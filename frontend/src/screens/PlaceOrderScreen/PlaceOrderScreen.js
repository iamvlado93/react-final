import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";
import swal from "sweetalert";

import "./index.css";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const checkoutHandler = () => {
    setTimeout(() => {
      swal("Well Done!", "You order has been sent!", "success");
      props.history.push("/");
      console.log(cart);
    }, 1000);
  };

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
            <div>
              Address: <span>{cart.shipping.address}</span>
              <br></br> City:
              <span>{cart.shipping.city}</span>
              <br></br> Country:
              <span>{cart.shipping.country}</span>
              <br></br> Postal Code:
              <span>{cart.shipping.postal}</span>
            </div>
          </div>
          <div>
            <div>
              Payment method: <span>{cart.payment.paymentMethod}</span>
            </div>
            <div>
              Card Number:
              <span>{cart.creditCard.cardNum}</span>
              <br></br>
              Expiration: <span>{cart.creditCard.expNum}</span>
              <br></br>
              CVV:
              <span>{cart.creditCard.cvvNum}</span>
              <br></br>
              Cardholder:<span>{cart.creditCard.cardName}</span>
            </div>
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
        <button
          onClick={checkoutHandler}
          className="button primary"
          disabled={cartItems.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
