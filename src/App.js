import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ServicePage from "./pages/ServicePage";
import ContactUsPage from "./pages/ContactUsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AllProducts from "./db/c_products.js";
import { useState, useEffect } from "react";
import CartPage from "./pages/CartPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  const [productsList, setProductList] = useState(AllProducts);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) != -1) return;
    setCart([...cart, item]);
    alert("Product is successfully added");
    // console.log(cart);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route
          exact
          path="products"
          element={<ProductsPage productslist={productsList} />}
        />
        <Route
          exact
          path="products/:id"
          element={
            <ProductDetailsPage
              productsList={productsList}
              handleClick={handleClick}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={<CartPage cartItem={cart} setCart={setCart} />}
        />
        <Route path="services" element={<ServicePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
