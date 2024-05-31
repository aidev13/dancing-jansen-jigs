import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Cart from './components/pages/Cart.jsx'
import Contact from './components/pages/Contact.jsx'
import Shop from './components/pages/Shop.jsx'
import JigList from './components/JigList.jsx';
import './Styles/index.css'

const router = createBrowserRouter([
   {
      path: "",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "shop",
            element: <Shop />,
         },
         {
            path: "about",
            element: <About />,
         },
         {
            path: "contact",
            element: <Contact />,
         },
         {
            path: "cart",
            element: <Cart />,
         },
      ]
   },
   
]);


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
