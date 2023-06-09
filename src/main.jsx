import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Providers/AuthProvider'
  import { ToastContainer } from "react-toastify";
   import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.Fragment>
);
