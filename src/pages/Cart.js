import { Products } from "../data/Products";
import React, { useContext } from "react";
import { ShopContext } from "../context/ContextShop";
import Cartitem from "./Cartitem";
import "../style/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartObject, getCartTotal, checkout } = useContext(ShopContext)
    const totalAmount = getCartTotal()

    const navigate = useNavigate()



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
       { totalAmount > 0 ? (

       
<div className="checkout">
   { /* if statement  */}
   <p>Total: £{totalAmount}</p>
    <button onClick={() => navigate("/")}>Continue Shopping</button>
    <button /*onClick={() => {
        checkout();
        navigate("/checkout")
    }}*/>
        Check Out</button>
    </div>
  ) : (<h2> your Cart is Empty</h2>)}
   

</div>
)

}
 export default Cart; 