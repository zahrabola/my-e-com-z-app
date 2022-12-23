import React, { useContext } from "react";
import { ShopContext } from "../context/ContextShop";
const Card = (props) => {
  const { title, productName, price, productImage, id } = props.data;
  const { addCart } = useContext(ShopContext);
  return (
    <div className="card">
      {" "}
      <div className="img-card">
        <img src={productImage} alt="tech" />
      </div>
      <div className="cardbox">
        <h2>{title}</h2>
        <h4>{productName}</h4>
        <p>£{price}</p>
      </div>
      <button className="add-Cartbtn" onClick={() => addCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Card;
