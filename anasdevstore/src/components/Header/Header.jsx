import React, { useState, useEffect } from "react";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../utils/AppContext";
import "../Header/Header.scss";

const Header = ({ onStartLoading, onStopLoading }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { getCartItemCount, addToCart } = useCart();
  const cartItemCount = getCartItemCount();

  const navigate = useNavigate();

  const handleScroll = () => {
    let offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleAddToCart = (product) => {
    onStartLoading(); // Start loader before adding to cart
    addToCart(product, 1);
    setTimeout(() => {
      onStopLoading(); // Stop loader after action is completed
    }, 1000); // Simulate delay
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li
              onClick={() => {
                navigate("/");
                onStartLoading();
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                onStartLoading();
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                navigate("/category/:id");
                onStartLoading();
              }}
            >
              Categories
            </li>
          </ul>
          <div
            className="center"
            onClick={() => {
              navigate("/");
              onStartLoading();
            }}
          >
            <span className="v1">ANAS</span>
            <span>DEVSTORE.</span>
          </div>
          <div className="right">
            <span
              onClick={() => {
                setShowSearch(true);
                onStartLoading();
              }}
            >
              <TbSearch />
            </span>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {cartItemCount > 0 && <span>{cartItemCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
