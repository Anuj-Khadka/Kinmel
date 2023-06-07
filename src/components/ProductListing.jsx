import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts, fetchProducts } from "../redux/actions/product-actions";
import axios from "axios";
import "../assets/css/Products.css";
import Categories from "./Categories";
import { motion } from "framer-motion";

export const categoryListContext = createContext();

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cat, setCat] = useState(`all`);
  const [productsList, setProductsList] = useState({
    ...products.allProducts.products,
  });
  const {rating} = productsList
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filterProducts = (category) => {
    setCat(category);
    console.log(cat);
    console.log("product list ", productsList);
  };

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => console.log("err", error));
  //   dispatch(setProducts(response.data));
  // };
  console.log(products)




  
  return (
    <categoryListContext.Provider value={{ filterProducts }}>
      <Categories cat={cat} />
      <motion.div
        
        layout
        className="products-container"
      >
        <ProductComponent cat={cat} productsList={productsList} />
      </motion.div>
    </categoryListContext.Provider>
  );
};

export default ProductListing;
