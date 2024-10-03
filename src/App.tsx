import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/stack',
        element: <Stack />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
