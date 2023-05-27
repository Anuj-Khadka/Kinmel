import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/actions/product-actions";
import "../assets/css/Products.css";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log(categories);

  const categoriesList = categories.map((category) => {
    return (
      <li className="category" key={category}>
        {category.toUpperCase()}
      </li>
    );
  });
  return (
    <div className="categories-container">
      <h2 className="categories-heading">Category</h2>
      <ul className="categories">{categoriesList}</ul>
    </div>
  );
};

export default Categories;
