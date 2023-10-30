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
import ProductUpdate from './components/ProductUpdate.jsx';
import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <MyCart></MyCart>,
        loader: ()=> fetch('http://localhost:5000/cars/carCarts'),
      },
      {
        path: '/:brand',
        element: <IndividualBrand></IndividualBrand>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/brandCars/${params.brand}`)
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/brandCars/${params.id}`)
      },
      {
        path: '/productUpdate/:id',
        element: <ProductUpdate></ProductUpdate>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/brandCars/${params.id}`)
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>,
      }
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
