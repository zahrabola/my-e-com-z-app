import React, { useContext } from "react";
import { ShopContext } from "../context/ContextShop";

const Cartitem = (props) => {
    const { title, productName, price, productImage, id } = props.data;
    const {  cartObject } = useContext(ShopContext);
    return (
    
   <div className="cartitem"> 
            <div className="img-card">
        <img src={productImage} alt="tech" />
      </div>
      <div className="cardbox">
        <h2>{title}</h2>
        <h4>{productName}</h4>
        <p>£{price}</p>
<div className="counthandler">
    <button>-</button>   
    <input value={cartObject[id]} />
    <button>+</button>
</div>
      </div>
        </div>
        
     
    )
    
    }
     export default Cartitem; 