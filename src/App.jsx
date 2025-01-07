// import { useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// // import Element2 from "./components/Element2";
// // import "./App.css";
// import Cart from "./Pages/Cart";
// import ShopCategory from "./Pages/ShopCategory";
// import ShopCategory1 from "./Pages/ShopCategory1";

// import Shop from "./Pages/Shop";
// import Product from "./Pages/Product";
// import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginSignup from "./Pages/LoginSignup";
// import men_banner from "./components/assets/banner_mens.png";
// import women_banner from "./components/assets/banner_women.png";
// import kid_banner from "./components/assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          /> */}
          {/* <Route
            path="/Collections"
            element={<ShopCategory banner={women_banner} />}
          />
          <Route
            path="/AllCollect"
            element={<ShopCategory1 banner={women_banner} />}
          /> */}
          {/* <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          /> */}

          {/* <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Blog" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
