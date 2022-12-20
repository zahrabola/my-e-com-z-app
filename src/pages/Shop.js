import React from "react";
import { Products } from "../data/Products";
import Card from "./Card";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h2>Zahra Olanrewaju</h2>
        <p>E commerce Website</p>
      </div>
      <div className="products">
        {Products.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
