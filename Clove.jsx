import React, { useState } from 'react';
import './Clove.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const Clove = () => {
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
            <img src="clove.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Clove</h4>
            <div className="price">
              <span className="original-price">$89.00</span>
              <span className="sale-price">$72.00</span>
            </div>
          </div>
        </div>
        
        
        {/* Tabs */}
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
          <b>Strong, warm, and unmistakably aromatic.</b>
          <p>
          Our  premium <b>Cloves</b> are carefully selected, sun-dried, and packed to preserve their intense aroma and bold, slightly sweet flavor. Known as Laung in Indian kitchens, cloves are a staple in everything from garam masala and biryanis to chai and Ayurvedic remedies.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p> A little goes a long way—just a few buds can add a depth of flavor and a warming touch to both savory and sweet dishes.</p>
            <ul>
             <li><b>100% Natural & Unpolished </b></li>
            <li><b>Sourced from [Region, e.g., Tamil Nadu/Sri Lanka] – Known for Superior Quality</b></li>
            <li><b>Rich in Antioxidants & Traditional Healing Properties</b></li>
          </ul>
          <p>Add a spark of warmth and wellness to your cooking with our finest cloves.</p>
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

export default Clove;
