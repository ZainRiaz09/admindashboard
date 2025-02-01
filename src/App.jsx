import React from "react";
import  { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/layout";
import Contracts from "./pages/Contracts"
import Estimate from "./pages/Estimate";
import Settings from "./pages/Settings";
import Threshold from "./pages/Threshold"
import Blueprint from "./pages/Blueprint";
import Loader from "./Componenets/Loader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path:"/Blueprint",
        element:<Blueprint/>,
      },
      {
        path:"/Contract",
        element:<Contracts/>
      }
      , {
        path:"/Estimate",
        element: <Estimate/>
      },
      {
        path:"/Settings",
        element: <Settings/>
      },
     { path:"/Threshold"
      ,
      element: <Threshold/>
     }
    ],
  }
  
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
