import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCreditCard } from "../../actions/cartActions";
import cc from "../CreditCardScreen/cc.png";

import "./index.css";

function CreditCardScreen(props) {
  const [cardNum, setCardNumber] = useState("");
  const [expNum, setExpNum] = useState("");
  const [cvvNum, setCvvNum] = useState("");
  const [cardName, setCardName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveCreditCard({ cardNum, expNum, cvvNum, cardName }));
    props.history.push("placeorder");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div>
          <img className="cc" src={cc} alt="cc"></img>
        </div>
        <ul className="form-container">
          <li>
            <h3>Credit Card</h3>
            <span>Step 3</span>
          </li>
          <li>
            <label htmlFor="card">Card Name</label>
            <input
              type="text"
              name="card"
              id="card"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="expiration">Expiration Date</label>
            <input
              type="text"
              name="expiration"
              id="expiration"
              onChange={(e) => setExpNum(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              onChange={(e) => setCvvNum(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="cardName">Card Name</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              onChange={(e) => setCardName(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Pay
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CreditCardScreen;
