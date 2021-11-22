import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Member from './router/Member';
import MemberDetail from './router/Member/MemberDetail';
import MemberAdd from './router/Member/MemberAdd';
import Item from './router/Item';
import ItemAdd from './router/Item/ItemAdd';
import ItemDetail from './router/Item/ItemDetail';
import OrderAdd from './router/Order/OrderAdd';
import Order from './router/Order';
import OrderDetail from './router/Order/OrderDetail';
import Inventory from './router/Inventory';
import Membership from './router/Membership';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/member" element={<Member />} />
        <Route path="/member/add" element={<MemberAdd />} />
        <Route path="/member/detail/:id" element={<MemberDetail />} />
        <Route path="/item" element={<Item />} />
        <Route path="/item/add" element={<ItemAdd />} />
        <Route path="/item/detail/:id" element={<ItemDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/add" element={<OrderAdd />} />
        <Route path="/order/detail/:id" element={<OrderDetail />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
