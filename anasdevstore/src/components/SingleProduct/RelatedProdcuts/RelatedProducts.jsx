import React from "react";
import { products } from "../../../assets/data";
import { useNavigate } from "react-router-dom";
import "./RelatedProducts.scss";

const RelatedProducts = ({ currentCategory, currentProductId }) => {
  // Filter related products based on the current category and exclude the current product
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentCategory && product.id !== currentProductId
    )
    .slice(0, 4); // Limit to 4 products

  const navigate = useNavigate();

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="related-products-list">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <div
              key={product.id}
              className="related-product-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>RS {product.price}</p>
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
