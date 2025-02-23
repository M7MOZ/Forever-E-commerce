/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  
  const addToCart = async (itemId, size) => {
    if (!size){
      toast.error("Please select a size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }
  const getCartCount = () => {
    let totalCount = 0;
    for (let item in cartItems){
      for (let size in cartItems[item]){
        try{
          if(cartItems[item][size] > 0){
            totalCount += cartItems[item][size];
          }
        } catch (error){
          console.log(error);
        }
      }
    }
    return totalCount 
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if(cartData[itemId][size]){
        cartData[itemId][size] = quantity;
      }
    }
    setCartItems(cartData);
  }
  const getCartAmount =() => {
    let totalAmount = 0;
    for (let item in cartItems){
      for (let size in cartItems[item]){
        try{
          if(cartItems[item][size] > 0){
            totalAmount += cartItems[item][size] * products.find(product => product._id === item).price;
          }
        } catch (error){
          console.log(error);
        }
      }
    }
    return totalAmount;
  }
  const value = {
    currency,
    delivery_fee,
    products,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
