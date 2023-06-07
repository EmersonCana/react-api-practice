import React from "react";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Product from "./components/Product";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
