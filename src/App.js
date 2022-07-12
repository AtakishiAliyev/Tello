import React from 'react'
import Home from './container/Home/Home';
import ProductList from './container/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './container/ProductDetails/ProductDetails';
import Basket from './container/Basket/Basket';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products/:slug" element={<ProductList />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
