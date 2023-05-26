import React from "react";
import "../assets/css/HomeGallery.css"

const HomeGallery = () => {
  return (
    <div className="gallery-container">
      <div className="main-gallery gallery-carousel">
        <img src="https://gibranmallick.com/wp-content/uploads/2020/06/Sunnto-Watch-Product-Photography_Gibran-Mallick-Studio_Photo-Video-Web-Media-Design-e1602962059761.jpg" alt="watch" /> 
      </div>
      {/* <div className="category-gallery">  */}
        <div className="category-gallery" id="top-category">
          <img src="https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?cs=srgb&dl=pexels-garrett-morrow-2885014.jpg&fm=jpg" alt="pc_gaming_collection" /> 
        </div>
        <div className="category-gallery" id="bottom-category">
          <img src="https://ecommercephotographyindia.com/blog/wp-content/uploads/2021/11/black-black-wallpaper-camera-8792-1024x683-1.jpeg" alt="accessories" /> 
        </div>
      {/* </div> */}
    </div>
  );
};

export default HomeGallery;
