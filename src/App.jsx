import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/main-components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import HomeGallery from "./components/HomeGallery";
import About from "./components/main-components/About";
import Home from "./components/main-components/Home";
import Products from "./components/main-components/Products";
import Blogs from "./components/main-components/Blogs";
import Contact from "./components/main-components/Contact";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/" element={<ProductListing />} /> */}
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route>404 Not Found</Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
