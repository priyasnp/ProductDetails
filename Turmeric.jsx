import React, { useState } from 'react';
import './Turmeric.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const Turmeric = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="product-page">
        {/* Left decorative image */}
        <img
          src="image/leftimg.png"
          alt=""
          style={{
            position: "absolute",
            left: 0,
            top: 30,
            width:isMobile?150: 400,
            height: "auto",
            objectFit: "contain",
            opacity: 0.85,
          }}
        />
        {/* Right decorative image */}
        <img
          src="image/rightimg.png"
          alt=""
          style={{
            position: "absolute",
            right: 0,
            top: 30,
            width:isMobile?150: 400,
            height: "auto",
            objectFit: "contain",
            opacity: 0.85,
          }}
        />
      <h1 className="title">Product Details</h1>

      <div className="product-container">
        {/* Image + Info */}
        <div className="image-info-wrapper">
          <div className="image-section">
            <div className="sale-badge">Sale!</div>
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <img src="turmeric.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Turmeric</h4>
            <div className="price">
              <span className="original-price">$89.00</span>
              <span className="sale-price">$72.00</span>
            </div>
          </div>
        </div>
      <div className="tab-section">
      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}>
          Description
        </button>
        <button
          className={`tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')} >
         Details
        </button>
      </div>
       <div className="tab-content">
        {activeTab === 'description' && (
          <div>
          <h3>Description</h3>
          <b>Earthy, golden, and packed with wellness.</b>
          <p>
          Our high-quality <b>Turmeric</b> is sourced from trusted farms and naturally sun-dried to preserve its vibrant color, bold flavor, and powerful curcumin content. Known as Haldi in every Indian household, turmeric is not just a spice—it's a symbol of health, tradition, and everyday healing.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Whether you're cooking a comforting curry, making golden milk, or blending your own masalas, our turmeric adds warmth, color, and depth to every dish.</p>
            <ul>
             <li><b>100% Pure & Unadulterated</b></li>
            <li><b>Rich in Curcumin – A Natural Anti-Inflammatory</b></li>
            <li><b>Sourced from [Region, e.g., Lakadong/Salem] for Superior Quality</b></li>
            <li><b>Ideal for Cooking, Wellness, and Skincare Use</b></li>
          </ul>
          <p>Experience the golden spice that’s been at the heart of Indian kitchens for centuries.</p>
        </div>
        )}
      </div>
    </div>
    </div>
      <div className="description">
     </div>
    </div>
  );
};

export default Turmeric;
