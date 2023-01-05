import { createContext, useState } from "react";
import { Products } from "../data/Products";

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartObject, setCartObject] = useState(GetDefaultCart());
///add cart
  const addCart = (ItemsId) => {
    setCartObject((prev) => ({ ...prev, [ItemsId]: prev[ItemsId] + 1 }));
  };
/// remove cart
  const removeCart = (ItemsId) => {
    setCartObject((prev) => ({ ...prev, [ItemsId]: prev[ItemsId] - 1 }));
  };

//




  const contextValue = { cartObject, addCart, removeCart };
console.log(cartObject);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
