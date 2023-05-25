import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import HomeGallery from "./components/HomeGallery";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <div>
          <HomeGallery />
          {/* <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
