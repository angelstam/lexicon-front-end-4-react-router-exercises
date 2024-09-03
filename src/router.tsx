import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true, // The index attribute sets the default child route to be display together with the parent route.
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
