import React from 'react'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

export default function App() {

  const routers = createBrowserRouter([ 
    {
      path: '/',
      element: <Layout />,
      children: [

     
        {
          index: true,
          element: <Home />
        },

        {
          path: 'category/:slug',
          element: <Home />
        },

        {
          path: 'contact',
          element: <ContactUs />
        },

        {
          path: 'about',
          element: <AboutUs />
        },
        {
          path:"/ProductDetails/:id?",
          element:<ProductDetails/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signUp",
          element:<SignUp/>
        },

        {
        path: "/terms",
  element: <Terms />
          
        },

        {
           path: "/privacy",
  element: <Privacy />
        },

        {
          path: '*',
          element: <NotFoundPage/>
          
        },

      ]
    }
  ])

  return <RouterProvider router={routers} />
}