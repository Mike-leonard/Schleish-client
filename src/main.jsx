import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

/*                 <style>
                    {`
       body{
    background: rgb(229 231 235);
        } 
        `}
                </style> */
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>,
)

