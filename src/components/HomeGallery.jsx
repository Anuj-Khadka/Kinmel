import React from "react";
import "../assets/css/HomeGallery.css"

const HomeGallery = () => {
  return (
    <div className="gallery-container">
      <div className="main-gallery gallery-carousel"></div>
      <div className="category-gallery">
        <div className="top-category"></div>
        <div className="bottom-category"></div>
      </div>
    </div>
  );
};

export default HomeGallery;
