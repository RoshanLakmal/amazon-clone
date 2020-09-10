import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Product from "./Product";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
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

          {basket.map((item) => (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              page="CheckoutProduct"
            />
          ))}
        </div>
      </div>
      <div className="Checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
