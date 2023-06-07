import React from "react";
import HomeGallery from "../HomeGallery";
import ProductListing from "../ProductListing";
import Categories from "../Categories";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HomeGallery />
      {/* <Categories /> */}
      <ProductListing />
      <Footer />
    </div>
  );
};

export default Home;
