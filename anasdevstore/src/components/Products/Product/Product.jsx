// Product.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../../assets/data";
import { useCart } from "../../../utils/AppContext"; // Import useCart from context
import "./Product.scss";

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart function from the context

  // Handle Add to Cart button click
  const handleAddToCart = (product) => {
    addToCart(product, 1); // Add 1 quantity of the product to the cart
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => navigate("/product/" + product.id)}
        >
          <div className="image-container">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-price">RS {product.price}</div>
            <button
              className="add-to-cart-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the onClick of the card itself
                handleAddToCart(product); // Add product to cart
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
