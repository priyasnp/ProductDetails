import React, { useState } from 'react';
import './BayLeaf.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import{
    useMediaQuery
   
  } from "@mui/material";


const BayLeaf = () => {
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
            <img src="bayleaf.png" alt="Product" className="product-image" />
          </div>
          <div className="info-section">
            <h4 className="product-name">Bay Leaf</h4>
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
          <b>Subtle, aromatic, and deeply flavorful.</b>
          <p>
        Our premium<b> BayLeaves </b>also known as Tej Patta, are handpicked from lush, green forests and naturally dried to preserve their gentle, herbal aroma and slightly bitter, woody flavor. An essential in Indian cooking, bay leaves are perfect for infusing dals, curries, biryanis, and soups with a comforting depth and fragrance</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
             <h3>Details</h3>
          <p>Slow-cooked or simmered, just one leaf can transform an entire dish.</p>
          <ul>
            <li><b>100% Natural & Sun-Dried</b></li>
            <li><b>Adds Aroma Without Overpowering the Dish</b></li>
            <li><b>Essential for Indian, Mediterranean & Asian Cuisines</b></li>
            <li><b>Known in Ayurveda for Its Digestive & Detoxifying Properties</b></li>
          </ul>
          <p>Elevate everyday meals with the subtle magic of bay leaf.</p>
        
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

export default BayLeaf;
