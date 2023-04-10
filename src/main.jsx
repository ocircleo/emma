import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Order from './components/order/Order';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import Cartproductloader from './loader/Cartproductloader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: '/', element: <Shop></Shop> },
      { path: 'orders', element: <Order></Order> },
      {path:'inventory',element:<Inventory></Inventory>,loader:Cartproductloader},
      {path:'login',element:<Login></Login>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
