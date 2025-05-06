import React, { useState } from 'react';
import './Tamarind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const Tamarind = () => {
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
            <img src="tamarind.jpg" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Tamarind</h4>
            <div className="price">
              <span className="original-price">$35.00</span>
              <span className="sale-price">$24.00</span>
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
          <b>Tangy, rich, and irresistibly bold.</b>
          <p>
        Our premium<b> Tamarind</b> is sourced from naturally grown trees and carefully processed to retain its deep, fruity flavor and signature tang. Known as Imli in Indian kitchens, tamarind is a beloved ingredient used to add a perfect balance of sourness and depth to chutneys, curries, lentils, and street-style snacks.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Whether you're preparing a spicy sambar, tangy pani puri, or a refreshing tamarind drink, our tamarind delivers authentic taste straight from nature.</p>
          <ul>
            <li><b>100% Natural & Preservative-Free</b></li>
            <li><b>Rich in Antioxidants, Vitamins & Digestive Benefits</b></li>
            <li><b>Soft, Pulp-Rich & Easy to Use</b></li>
            <li><b>Perfect for Indian, Thai, and Fusion Dishes</b></li>
          </ul>
          <p>Bring home the bold, tangy twist that elevates every meal.</p>
        
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

export default Tamarind;
