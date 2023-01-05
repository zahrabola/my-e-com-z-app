import React from "react";
import { Products } from "../data/Products";
import Card from "./Card";
import "../style/shop.css";

const Shop = () => {
  return (
    <div className="shops ">
      <div className="shop-title">
        <h2>Zahra Olanrewaju</h2>
        <p>E commerce Website</p>
      </div>
      <div className="products-card">
        {Products.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
