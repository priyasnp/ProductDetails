import React, { useState } from 'react';
import './CinnamonStick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const CinnamonStick = () => {
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
            <img src="cardamon.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Cinnamon Sticks</h4>
            <div className="price">
              <span className="original-price">$45.00</span>
              <span className="sale-price">$25.00</span>
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
                <h3>Warm, sweet, and unmistakably aromatic</h3>
                <p>
                  Our premium <b>Cinnamon Sticks</b> are hand-selected from trusted farms where they’re harvested at peak freshness and naturally sun-dried to preserve their deep flavor and rich aroma.
                  Known as Dalchini in Indian kitchens, these fragrant bark rolls are perfect for everything from biryanis and masala chai to desserts and wellness drinks.
                </p>
              </div>
            )}
            {activeTab === 'details' && (
              <div>
                <h1>Details</h1>
                <p>Whether you're simmering a slow-cooked curry or spicing up your morning tea, our cinnamon delivers the authentic warmth and subtle sweetness Indian cuisine is known for.</p>
                <ul>
                  <li><b>100% Natural & Unprocessed</b></li>
                  <li><b>No Artificial Additives or Preservatives</b></li>
                  <li><b>Sourced from Kerala for Rich Aroma & Taste</b></li>
                </ul>
                <p>Add a touch of tradition to your dishes with the spice that’s been cherished for centuries.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinnamonStick;