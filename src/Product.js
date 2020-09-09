import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="Product">
      <div className="Product-info">
        <p>The Lean Startup</p>
        <p className="Product-price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="Product-rating">
          <p>
            <span role="img" aria-label="donut">
              ⭐
            </span>
          </p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt="product"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
