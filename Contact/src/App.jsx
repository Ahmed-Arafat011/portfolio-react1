import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  { path: "", element: <Layout/>,children:[
  { index:true, element: <Home /> },
  { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },


  ]

  }
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
