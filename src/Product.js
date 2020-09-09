import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="Product">
      <div className="Product-info">
        <p>{title}</p>
        <p className="Product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <span role="img" aria-label="donut">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
