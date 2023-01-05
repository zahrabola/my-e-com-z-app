import { Products } from "../data/Products";
import React, { useContext } from "react";
import { ShopContext } from "../context/ContextShop";
import Cartitem from "./Cartitem";
import "../style/cart.css";

const Cart = () => {

    const { cartObject } = useContext(ShopContext)
return (
    <div className="cartcontainer"> 
       <div>
        <h1>Your Cart Item</h1>
       </div>
       <div className="cartitem">
        {
Products.map((item) => {
    if (cartObject[item.id] !== 0){
return (<Cartitem  data={item} />)
    } else {
        return <>
    </>
    }
})} 
       </div>
<div className="checkout">
    <p>Total: £</p>
    <button>Continue Shopping</button>
    <button>Check Out</button>
</div>
    </div>
)

}
 export default Cart; 