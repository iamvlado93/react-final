import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShipping } from "../../actions/cartActions";

import "./index.css";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, country, postal }));
    props.history.push("/payment");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3>Shipping</h3>
            <span>Step 1</span>
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              name="postal"
              id="postal"
              onChange={(e) => setPostal(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Continue
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ShippingScreen;
