import React from 'react'
import Home from './container/Home/Home';
import ProductList from './container/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './container/ProductDetails/ProductDetails';
import Basket from './container/Basket/Basket';
import SignUp from './container/SignUp/SignUp';
import Login from './container/Login/Login';
import UserProfile from './container/UserProfile/UserProfile';
import AuthRouter from './components/Router/AuthRouter';
import GenerateToken from './container/Login/GenerateToken';
import UserPrivateRouter from './components/Router/UserPrivateRouter';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products/:slug" element={<ProductList />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} />
        <Route path="/userprofile" element={<UserPrivateRouter />}>
          <Route path="/userprofile" element={<UserProfile />} />
        </Route>
        <Route path="/userprofile/:token" element={<GenerateToken />} />
        <Route path={"/login" | "/signup"} element={<AuthRouter />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
