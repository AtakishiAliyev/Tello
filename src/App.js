import React from 'react'
import Home from './container/Home/Home';
import ProductList from './container/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductList />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
