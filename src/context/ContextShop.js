import { createContext, useState } from "react";
import { Products } from "../data/Products";

export const ShopContext = createContext(null);

/// Defult Cart
const GetDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  const [cartObject, setCartObject] = useState(GetDefaultCart());

////Total card Amount 
const getCartTotal = () => {
  let totalAmount = 0; 
  for ( const product in cartObject) {
    if (cartObject[product] > 0) {
      let productInfo = Products.find((item) => item.id === Number(product));
      totalAmount += cartObject[product] * productInfo.price
    }
  }
  return totalAmount
}


  ///add cart
  const addCart = (ItemsId) => {
    setCartObject((prev) => ({ ...prev, [ItemsId]: prev[ItemsId] + 1 }));
  };
/// remove cart
  const removeCart = (ItemsId) => {
    setCartObject((prev) => ({ ...prev, [ItemsId]: prev[ItemsId] - 1 }));
  };

// update cart
 const updateItemCount = (newAmount, ItemsId) => {
  setCartObject((prev) => ({...prev, [ItemsId]: newAmount}));
 }



  const contextValue = { cartObject, addCart, removeCart, updateItemCount, getCartTotal};
console.log(cartObject);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
