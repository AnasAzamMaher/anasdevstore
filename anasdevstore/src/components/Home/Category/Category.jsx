import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../../assets/data";
import "./Category.scss";

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-categories">
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category"
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <img src={category.img} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
