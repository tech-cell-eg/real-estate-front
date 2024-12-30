
import "./App.css";
import Home from "./Company/Pages/Home/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./UI/errors/NotFound";
import ErrorElement from "./UI/errors/ErrorElement";
import TermsAndCondattions from "./Company/Pages/TermsAndCondation/TermsAndCondattions";



export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
     
      children: [
      { path: "/", element: <Home /> },
      { path: "/terms", element: <TermsAndCondattions/>}
        
        // { index: true, element: <Home /> },
      ],
      errorElement: <ErrorElement />,
    },
    // { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    {
      path: "/client",
      // element: <ClientDashboard />,
      errorElement: <ErrorElement />,
    },
    {
      path: "/company",
      // element: <CompanyDashboard />,
      errorElement: <ErrorElement />,
    },
    {
      path: "/reviewer",
      // element: <ReviewerDashboard />,
      errorElement: <ErrorElement />,
    },
    {
      path: "/inspector",
      // element: <InspectorDashboard />,
      errorElement: <ErrorElement />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}
