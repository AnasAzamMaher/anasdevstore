import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data";
import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
  const { id } = useParams();

  // Filter products based on the category ID from the URL
  const filteredProducts = products.filter(
    (product) => product.categoryId === parseInt(id)
  );

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Products</div>
        <Products innerPage={true} filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default Category;
