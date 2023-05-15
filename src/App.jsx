import { Component, useState } from "react";
import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductComponent from "./components/ProductComponent";
import ProductDetails from "./components/ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Router>
        <Route path="/" component={ProductListing} />
        <Route path="/product/productId" component={ProductComponent} />
        <Route>404 Not Found</Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;
