import React from "react";
import "../Banner/Banner.scss";

import { Link, useNavigate } from "react-router-dom";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>STORE</h1>
          <p>
            Welcome to ANASDEVSTORE, your one-stop destination for all things
            tech and beyond.
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={() => navigate("/about")}>
              Read More
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/category/:id")}
            >
              Shop Now
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
