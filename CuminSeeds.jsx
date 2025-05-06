import React, { useState } from 'react';
import './CuminSeeds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const CuminSeeds = () => {
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
            <img src="cumin.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Cumin Seeds</h4>
            <div className="price">
              <span className="original-price">$45.00</span>
              <span className="sale-price">$25.00</span>
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
          <b>Earthy, warm, and unmistakably aromatic.</b>
          <p>
          Our  premium <b>Cumin Seeds</b> , known as Jeera in Indian kitchens, are carefully sourced and naturally dried to retain their intense aroma and bold, nutty flavor. A staple spice in Indian and global cuisines, cumin seeds add depth to curries, rice dishes, dals, and spice blends.</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Lightly roasted or tempered in hot oil, cumin releases a rich, toasty fragrance that instantly elevates any dish.</p>
            <ul>
             <li><b>100% Pure & Naturally Dried</b></li>
            <li><b>Bold Aroma with a Slightly Peppery Kick</b></li>
            <li><b>Essential for Indian, Middle Eastern & Mexican Recipes</b></li>
            <li><b>Traditionally Used to Aid Digestion & Boost Immunity</b></li>
          </ul>
          <p>Bring home the timeless taste of jeera and add authentic flavor to every meal.</p>
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

export default CuminSeeds;
