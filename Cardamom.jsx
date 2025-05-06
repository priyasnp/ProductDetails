import React, { useState } from 'react';
import './Cardamom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const Cardamom = () => {
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
            <img src="cardamom.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Cardamom</h4>
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
          <b>Fragrant, sweet, and beautifully complex.</b>
          <p>
        Our premium<b> Cardamom Pods </b>or Elaichi, are carefully handpicked and sun-dried to preserve their vibrant green color, bold aroma, and sweet-spicy flavor. Known as the “Queen of Spices,” cardamom is cherished in Indian kitchens for its versatility—used in everything from chai and sweets to biryanis and spice blends.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Just a pod or two can infuse dishes with a luxurious, comforting aroma that lingers.</p>
          <ul>
            <li><b>100% Natural & Handpicked Pods</b></li>
            <li><b>Rich in Essential Oils for Intense Flavor</b></li>
            <li><b>Ideal for Chai, Desserts, Curries & Masalas</b></li>
            <li><b>Traditionally Used for Digestion & Fresh Breath</b></li>
          </ul>
          <p>Add a touch of royalty to your recipes with the irresistible charm of elaichi.</p>
        
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

export default Cardamom;
