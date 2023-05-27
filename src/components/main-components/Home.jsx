import React from "react";
import HomeGallery from "../HomeGallery";
import ProductListing from "../ProductListing";
import Categories from "../Categories";

const Home = () => {
  return (
    <div>
      <HomeGallery />
      {/* <Categories /> */}
      <ProductListing />
    </div>
  );
};

export default Home;
