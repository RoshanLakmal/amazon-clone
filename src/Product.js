import React from "react";
import "./Product.css";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, page }) {
  const [{ basket }, dispatch] = useStateValue();
  //   console.log("this is the basket", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        page: page,
      },
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={`${page}`}>
      {/* <img className={`${page}-image`} src={image} alt="product" /> */}
      <div className={`${page}-info`}>
        <p>{title}</p>
        <p className={`${page}-price`}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={`${page}-rating`}>
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
        {page === "CheckoutProduct" && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
      <img className={`${page}-image`} src={image} alt="product" />
      {page === "Product" && (
        <button onClick={addToBasket}>Add to Basket</button>
      )}
    </div>
  );
}

export default Product;
