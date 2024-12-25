import React from "react";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
import { useCart } from "../../utils/AppContext";
import { Link } from "react-router-dom";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import axios from "axios";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  const { cart } = useCart();

  const buyFunction = async () => {
    const requestData = {
      items: cart.map((item) => ({
        title: item.title,
        price: item.price * 100, // Stripe expects the price in cents
        quantity: item.quantity,
      })),
      email: "user@example.com", // Replace with the actual user's email
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/payment",
        requestData
      );

      if (response && response.status === 200) {
        window.location.href = response.data.url; // Redirect to Stripe Checkout
      } else {
        alert("Payment failed!");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="cart-panel">
      <div className="opacity-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        {/* Cart Header */}
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-button" onClick={() => setShowCart(false)}>
            <MdClose />
          </span>
        </div>

        {/* Empty Cart Message */}
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-content">
              <HiArchiveBoxXMark className="empty-cart-icon" />
              <div className="message">Your cart is empty!</div>
              <div className="sub-message">
                Looks like you haven't added anything yet.
              </div>
              <Link
                to="/"
                className="shop-now-btn"
                onClick={() => setShowCart(false)}
              >
                Go to Shop
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Scrollable Cart Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Cart Footer */}
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">
                  Rs.{" "}
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <button className="checkout-cta" onClick={buyFunction}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
