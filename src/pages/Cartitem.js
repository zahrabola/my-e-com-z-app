import React from "react";

const Cartitem = (props) => {
    const { title, productName, price, productImage, id } = props.data;
    return (
    
   <div className="cartitem"> 
            <div className="img-card">
        <img src={productImage} alt="tech" />
      </div>
      <div className="cardbox">
        <h2>{title}</h2>
        <h4>{productName}</h4>
        <p>£{price}</p>

      </div>
        </div>
        
     
    )
    
    }
     export default Cartitem; 