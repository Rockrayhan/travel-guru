import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import BookingDetails from './Components/BookingDetails.jsx';
import HotelDetails from './Components/HotelDetails.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [     
          {
            path:"",
            element: <Home/>,
            loader: () => fetch('/fakedata.json')
          },          
          {
            path:"/booking/:id",
            element: <BookingDetails/>,
            loader: () => fetch('/fakedata.json')
          },          
        
    ]
  },
  {
    path:"/details/:id",
    element: <PrivateRoute> <HotelDetails/> </PrivateRoute>,
    loader: () => fetch('/fakedata.json')
  },  
  {
    path:"/login",
    element: <Login/>
  },      
  {
    path:"/register",
    element: <Register/>
  },  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
