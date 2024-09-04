import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true, // The index attribute sets the default child route to be display together with the parent route.
        element: <Home />,
      },
      {
        path: "old-home",
        element: <Navigate to="/" />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            path: "stats",
            element: <Stats />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
