import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import AuthProvider from './Providers/AuthProvider.jsx';

import router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
