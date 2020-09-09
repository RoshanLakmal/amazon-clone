import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-left">
        <img
          className="Checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="add-banner"
        />
        <div>
          <h2 className="Checkout-title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="Checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
