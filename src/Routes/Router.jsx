
import React from 'react'

import {
    createBrowserRouter
    
  } from "react-router-dom";
import { Root } from '../Layout/Root';
import { Home } from '../pages/Home/Home';
import { Allservice } from '../pages/Services/Allservice';
import { Login } from '../pages/Auth/Login';
import { Registration } from '../pages/Auth/Registration';
import { Servicedetails } from '../Components/Catagories/Servicedetails';
import Privaterout from './Privaterout';
import NotFoundPage from '../pages/NotFoundPage';
import Events from '../pages/Events/Events';
import AboutUs from '../pages/AboutUs';
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root/>,
      children:[
        {
            path: "/",
            element: <Home/>,
            loader: ()=> fetch('/services.json'),
        },
        {
          path: "/services/:id",
          element: <Privaterout><Servicedetails/></Privaterout>,
          loader: ()=> fetch('/services.json'),
        },
        {
          path: "/services/services/:id",
          element: <Privaterout><Servicedetails/></Privaterout>,
          loader: ()=> fetch('/services.json'),
        },
        {
            path: "/services",
            element: <Privaterout><Allservice/> </Privaterout>,
            loader: ()=> fetch('/services.json'),
        },
        {
          path: "/events",
          element: <Privaterout><Events/></Privaterout>,
          loader: ()=> fetch('/events.json'),
        },
        {
          path: "/aboutUs",
          element:<AboutUs/>
        },
        {
            path: "/login",
            element: <Login/>,
            
        },
        {
          
            path: "/registration",
            element: <Registration/>,
            
        
        },
        {
          path: '*', 
          element: <NotFoundPage/>, // Create and import your 404 page component
        }
      ]
    },
  ]);

export default router;