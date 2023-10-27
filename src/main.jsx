import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/Router'
import { RouterProvider } from 'react-router-dom'
import { Authprovider } from './Components/provider/Authprovider'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { ToastContainer } from 'react-toastify'

// Initialize AOS with your desired options
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: false, // Whether animations should only happen once while scrolling down
});

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
 
    <Authprovider>
      <RouterProvider router={router}/>
      
    </Authprovider>
  
  </React.StrictMode>
)
