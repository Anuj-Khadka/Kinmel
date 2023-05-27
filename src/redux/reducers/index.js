import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, fetchCategories } from "./product-reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  categories: fetchCategories,
});

export default reducers;
