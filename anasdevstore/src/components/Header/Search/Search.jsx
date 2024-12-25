import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { products } from "../../../assets/data"; // Import your products data
import { useNavigate } from "react-router-dom"; // To navigate to product pages
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-results-content">
        {filteredProducts.length > 0 ? (
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="prod-details">
                  <span className="name">{product.title}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
