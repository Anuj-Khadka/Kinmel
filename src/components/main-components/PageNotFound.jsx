import React from 'react';
import PNF from "../../assets/images/PageNotFound.jpg";

const PageNotFound = () => {
  const imgContainer = {
    height: "auto",
    width: "100%",
    overflow: "hidden",
  };

  const imgStyle = {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "auto",
    width: "auto",
    objectFit: "fill",
  };

  return (
    <div style={imgContainer}>
      <img src={PNF} alt="page_not_found" style={imgStyle} />
    </div>
  );
};

export default PageNotFound;
