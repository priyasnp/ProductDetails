import React, { useState } from 'react';
import './FennelSeeds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const FennelSeeds = () => {
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
            <img src="fennel.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Fennel Seeds</h4>
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
          <b>Sweet, refreshing, and naturally aromatic.</b>
          <p>
        Our premium<b> Fennel Seeds</b> known as Saunf, are carefully sourced from the finest farms and sun-dried to lock in their sweet, licorice-like flavor and vibrant green color. A staple in Indian kitchens, fennel seeds are used in everything from spice blends and pickles to desserts and digestive mouth fresheners.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Whether you’re cooking, baking, or simply chewing them after a meal, fennel seeds offer a delightful burst of freshness and flavor.</p>
          <ul>
            <li><b>100% Pure & Unpolished</b></li>
            <li><b>Naturally Sweet with a Cooling Effect</b></li>
            <li><b>Traditionally Used for Digestion & Fresh Breath</b></li>
            <li><b>Perfect for Curries, Teas, Sweets & Mouth Fresheners</b></li>
          </ul>
          <p>Add a touch of sweetness and tradition to your spice rack with our premium fennel seeds.</p>
        
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

export default FennelSeeds;
