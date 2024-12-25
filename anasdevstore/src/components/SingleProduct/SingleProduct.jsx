import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../utils/AppContext";
import RelatedProducts from "./RelatedProdcuts/RelatedProducts";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the product based on the ID from the URL
  const product = products.find((item) => item.id === parseInt(id));

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevState) => (prevState === 1 ? 1 : prevState - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="right">
            <span className="title">{product.title}</span>
            <span className="price">RS: {product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={handleDecrement}>-</span>
                <span>{quantity}</span>
                <span onClick={handleIncrement}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                <FaCartPlus />
                <h4>ADD TO CART</h4>
              </button>
            </div>
          </div>
        </div>

        {/* Pass the current category and product ID to RelatedProducts */}
        <RelatedProducts
          currentCategory={product.category}
          currentProductId={product.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
