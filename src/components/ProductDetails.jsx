import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/product-actions";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { id, title, image, price, category } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== "") fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  // console.log(product);
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log("error", error));
    // console.log("response", response);
    dispatch(selectedProduct(response.data));
  };
  return (
    <div className="four wide column">
      {Object.keys(product).length === 0 ? (
        <div>Loading.....</div>
      ) : (
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
