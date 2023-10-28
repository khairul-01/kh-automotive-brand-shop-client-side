import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider.jsx';
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import AddProduct from './components/AddProduct.jsx';
import MyCart from './components/MyCart.jsx';
import IndividualBrand from './components/IndividualBrand.jsx';
import ProductDetails from './components/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: '/addCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/:brandName',
        element: <IndividualBrand></IndividualBrand>,
        loader: () => fetch('http://localhost:5000/cars/brandCars/')
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/brandCars/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
