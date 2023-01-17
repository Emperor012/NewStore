import { Routes, Route, Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import axiosClient from './api/axiosClient';
import Header from './pages/header/header';
import HomePage from './pages/home/home';
import { Footer } from './pages/footer/footer';
import RoomList from './pages/roomList/roomList';
import SofaList from './pages/sofaList/sofaList';
import ProductDetail from './pages/productDetail/productDetail';
import Cart from './pages/cart/cart';
import PaymentOrder from './pages/paymentOrder/paymentOrder';
import './pages/commonLayout/commonLayout.css';
import { getProducts } from './api/products';
import { fetchProductList } from './pages/newProductList/newProductListSlice';
import { fetchRoomList } from './pages/roomList/roomListSlice';
import { fetchCart } from './pages/cartModal/cartModalSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  useEffect(() => {
    dispatch(fetchRoomList());
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
    // console.log(`view-2`, productDetail);
  }, []);

  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/roomlist" element={<RoomList />}></Route>
        <Route path="/sofalist" element={<SofaList />}></Route>

        <Route path="/products/:productId" element={<ProductDetail exact component={ProductDetail} />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/payment" element={<PaymentOrder />}></Route>

        <Route>404 Not Found!</Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
