import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePayment } from "../../actions/cartActions";

import "./index.css";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("/creditcard");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Payment Method</h2>
            <span>Step 2</span>
          </li>
          <div>
            <li>
              <label htmlFor="card">Visa/MasterCard</label>
              <input
                type="radio"
                name="payment"
                id="payment"
                value="Visa/MasterCard"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </li>
            <button type="submit" className="button primary">
              Continue
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
}

export default PaymentScreen;
