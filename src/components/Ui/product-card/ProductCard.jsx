import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css"

const ProductCard = (props) => {
  const { id, title, price, image01 } = props.item;

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-image" className="w-50"/>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCard__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
