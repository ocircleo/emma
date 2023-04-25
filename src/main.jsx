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
import Register from './components/register/Register';
import Provider from './components/provider/Provider';
import PrivateRoute from './components/privateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: '/', element: <Shop></Shop> },
      { path: 'orders', element: <Order></Order>, loader: Cartproductloader },
      { path: 'inventory', element: <PrivateRoute><Inventory></Inventory></PrivateRoute> },
      { path: 'login', element: <Login></Login> },
      { path: 'register', element: <Register></Register> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
