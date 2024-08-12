import { createContext, useEffect, useState } from "react"
import { food_list } from './../assets/assets';
import { json } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  let lCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [cartItems, setCartItems] = useState(lCartItems ? { ...lCartItems } : {});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({
        ...prev,
        [itemId]: 1
      }))

    } else {
      setCartItems(prev => ({
        ...prev,
        [itemId]: prev[itemId] + 1
      }))
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }))
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  const getCartTotal = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find(product => product._id == item);
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotal
  }

  return (
    <StoreContext.Provider value={contextValue} >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;