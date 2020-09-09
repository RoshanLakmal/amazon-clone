import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  // Number(a.price) + Number(b.price)
  const [{ basket }, dispatch] = useStateValue();
  let total = 0;
  console.log(basket.map((a) => (total += Number(a.price))));
  //   let total = basket.reduce((a, b) =>
  //     console.log(a);
  //   , 0);
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{total}</strong>
            </p>
            <small className="Subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
