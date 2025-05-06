import React, { useState } from 'react';
import './WholeBlackPepper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const WholeBlackPepper = () => {
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
            <img src="whole black pepper.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Whole Black pepper</h4>
            <div className="price">
              <span className="original-price">$89.00</span>
              <span className="sale-price">$72.00</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tab-section">
          <div className="tab-container">
            <button className={`tab ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>
              Description
            </button>
            <button className={`tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>
              Details
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'description' && (
              <div>
                <h1>Description</h1>
                <h3>Bold. Pungent. Powerfully aromatic.</h3>
                <p>
                Our <b>Whole Black Peppercorns </b>are handpicked from sun-drenched farms, delivering a deep, full-bodied flavor that makes them a staple in kitchens around the world. Known as Kali Mirch in India, these tiny powerhouses are packed with natural oils and sharp heat that awakens any dish—be it savory curries, soups, marinades, or spice blends.
                </p>
              </div>
            )}
            {activeTab === 'details' && (
              <div>
                <h1>Details</h1>
                <p>Ground fresh or added whole, black pepper is not just a seasoning—it’s a tradition rooted in Indian culinary heritage and Ayurveda.</p>
                <ul>
                  <li><b>Naturally Sun-Dried for Maximum Flavor</b></li>
                  <li><b>Rich in Piperine – Supports Digestion & Immunity</b></li>
                  <li><b>Sourced from [Region, e.g., Malabar/Kerala] – World-Renowned for Quality</b></li>
                </ul>
                <p>Turn up the flavor with the king of spices.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeBlackPepper;