import React from "react";
import { MdClose } from "react-icons/md";
import { useCart } from "../../../utils/AppContext"; // Import the context

import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart(); // Access context functions

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-product">
      <div className="img-container">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="prod-details">
        <span className="name">{item.title}</span>

        <div className="quantity-buttons">
          <span onClick={handleDecrement}>-</span>
          <span>{item.quantity}</span>
          <span onClick={handleIncrement}>+</span>
        </div>
      </div>
      <div>
        <MdClose className="close-button" onClick={handleRemove} />
        <div className="text">
          <span>{item.quantity}</span>
          <span>x</span>
          <span>Rs {item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
