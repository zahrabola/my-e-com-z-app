import React from "react";

const Card = (props) => {
  const { title, productName, price, productImage } = props.data;
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
    </div>
  );
};

export default Card;
