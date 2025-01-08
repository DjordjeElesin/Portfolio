//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//toast
import { ToastContainer } from "react-toastify";
//pages
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
