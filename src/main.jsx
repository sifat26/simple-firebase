import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LAyout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {

        path:"/",
        element: <Home></Home>
      },
      {

        path:"/login",
        element: <Login></Login>
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
