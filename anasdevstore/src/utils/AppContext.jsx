import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const addToCart = (product, quantity) => {
    setLoading(true); // Show loading when adding to cart

    setTimeout(() => {
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
        toast.success(`${product.title} quantity updated in cart!`);
      } else {
        setCart((prevCart) => [...prevCart, { ...product, quantity }]);
        toast.success(`Product added to cart successfully!`);
      }
      setLoading(false); // Hide loading after adding to cart
    }, 1000);
  };

  const getCartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const updateQuantity = (id, newQuantity) => {
    console.log("Updating quantity for ID:", id, "to:", newQuantity);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    toast.success("Cart updated successfully!");
  };

  const removeFromCart = (id) => {
    console.log("Removing item with ID:", id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.info("Item removed from the cart.");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartItemCount,
        updateQuantity,
        removeFromCart,
        loading,
        setLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
