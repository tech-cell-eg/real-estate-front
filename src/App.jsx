import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
     
      children: [
        // { index: true, element: <Home /> },
      ],
      // errorElement: <ErrorElement />,
    },
    // { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    {
      path: "/client",
      // element: <ClientDashboard />,
      // errorElement: <ErrorElement />,
    },
    {
      path: "/company",
      // element: <CompanyDashboard />,
      // errorElement: <ErrorElement />,
    },
    {
      path: "/reviewer",
      // element: <ReviewerDashboard />,
      // errorElement: <ErrorElement />,
    },
    {
      path: "/inspector",
      // element: <InspectorDashboard />,
      // errorElement: <ErrorElement />,
    },
    // { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}
