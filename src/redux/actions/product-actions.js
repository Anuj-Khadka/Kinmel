import { actionTypes } from "../consts/action-types";
import fakestoreapi from "../../apis/fake-store-api";

export const fetchProducts = () => {
  return async (dispatch)=>{
    const response = await fakestoreapi.get("/products")
    dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data})
  }
  // return {
  //   type: actionTypes.FETCH_PRODUCTS,
  //   payload: response,
  // };
};

export const fetchProduct = (id) => {
  return async (dispatch)=>{
    const response = await fakestoreapi.get(`/products/${id}`)
    dispatch({type: actionTypes.SELECTED_PRODUCT, payload: response.data})
  }
  // return {
  //   type: actionTypes.FETCH_PRODUCTS,
  //   payload: response,
  // };
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
