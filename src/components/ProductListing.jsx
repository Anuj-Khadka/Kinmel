import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts, fetchProducts} from "../redux/actions/product-actions"
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => console.log("err", error));
  //   dispatch(setProducts(response.data));
  // };
  console.log(products)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
