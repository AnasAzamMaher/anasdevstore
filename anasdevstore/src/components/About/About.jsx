import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>Welcome to ANASDEVSTORE</h1>
        <p>Your one-stop shop for the best tech products</p>
      </div>

      <div className="about-content">
        <section className="section mission">
          <h2>Our Mission</h2>
          <p>
            At ANASDEVSTORE, our mission is to provide top-quality products with
            an exceptional shopping experience. We are dedicated to bringing you
            the latest and greatest tech gadgets that enhance your lifestyle.
          </p>
        </section>

        <section className="section vision">
          <h2>Our Vision</h2>
          <p>
            To become a leading e-commerce store known for our commitment to
            quality, customer satisfaction, and innovation in the tech world.
          </p>
        </section>

        <section className="section values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Customer First:</strong> Your satisfaction is our
              priority.
            </li>
            <li>
              <strong>Innovation:</strong> Constantly evolving to bring you the
              best.
            </li>
            <li>
              <strong>Quality:</strong> Only the best products make it to our
              store.
            </li>
            <li>
              <strong>Trust:</strong> Building long-lasting relationships with
              our customers.
            </li>
          </ul>
        </section>

        <section className="section story">
          <h2>Our Story</h2>
          <p>
            Founded by passionate tech enthusiasts, ANASDEVSTORE started as a
            small online store with a big dream. Over the years, we've grown
            into a trusted name in the e-commerce industry, known for our
            curated collection of tech products.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
