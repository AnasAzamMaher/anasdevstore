import React from "react";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import "./Footer.scss";
import paymentCards from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">
            <span className="v1">ANAS</span>
            <span>DEVSTORE.</span>
          </div>
          <div className="text">
            ANASDEVSTORE is your one-stop destination for the latest in
            technology and lifestyle products. We offer a wide range of
            high-quality, innovative items designed to enhance your everyday
            life. Our mission is to provide exceptional customer service,
            ensuring that every shopping experience is seamless and enjoyable.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Based in Gujranwala, Punjab, Pakistan</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +92 312 7372 000</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@anasdevstore.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Airbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Contact Us</div>
          <div className="text">Returns</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Terms & Conditions</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            {" "}
            <strong>&#169; ANASDEVSTORE</strong> 2024 Created By ANAS AZAM
          </div>
          <div className="paymentCards">
            <img src={paymentCards} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
