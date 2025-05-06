import React, { useState } from 'react';
import './Nutmeg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const Nutmeg = () => {
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
            <img src="nutmeg.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Nutmeg </h4>
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
          <b>Warm, nutty, and deeply aromatic.</b>
          <p>
          Our  premium <b>Nutmeg</b> is carefully harvested from the finest sources and naturally dried to preserve its bold flavor and rich aroma. Known as Jaiphal in Indian households, nutmeg is a treasured spice used in both sweet and savory recipes—from creamy kheer and spice blends to festive baked goods and herbal tonics.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Just a small amount can elevate the taste of your dish with its warm, slightly sweet notes and distinctive fragrance.</p>
            <ul>
             <li><b>100% Pure & Natural Whole Nutmeg</b></li>
            <li><b>Packed with Essential Oils & Natural Goodness</b></li>
            <li><b>Traditionally Used in Ayurveda for Digestion & Relaxation </b></li>
            <li><b>Perfect for Desserts, Gravies, Masalas & Health Drinks</b></li>
          </ul>
          <p>Grate fresh for unmatched aroma and flavor—straight from the heart of nature.</p>
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

export default Nutmeg;
