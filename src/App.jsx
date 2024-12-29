import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./UI/errors/NotFound";
import ErrorElement from "./UI/errors/ErrorElement";
import NotAuthorized from "./UI/errors/NotAuthorized";
import ProtectedRoute from "./navigation/ProtectedRoute";
import RoleProtectedRoute from "./navigation/RoleProtectedRoute";
import "./App.css";
import Home from "./Home/Home";
import CompanyHome from "./Company/Pages/Home/Home";
import CLientHome from "./client/pages/ClientHome";

// ! You can find an example for routing for your flow in company role

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        // { path: "login", element: <Login /> },
        // { path: "register", element: <Register /> },
      ],
      errorElement: <ErrorElement />,
    },
    {
      path: "/client",
      element: (
        <ProtectedRoute>
          {/* <RoleProtectedRoute allowedRoles={["client"]}> */}
           <CLientHome />
          {/* </RoleProtectedRoute> */}
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    {
      //! Here is the main route of the role
      path: "/company",
      element: (
        <ProtectedRoute>
          {/* <RoleProtectedRoute allowedRoles={["company"]}> //! We will uncommented this line after creating the role */}
            <CompanyHome />
          {/* </RoleProtectedRoute> */}
        </ProtectedRoute>
      ),
      children: [
        //! Create a nested routes for your role
        {
          path: "settings", //! Name for the path
          element: (
            <ProtectedRoute>
              <RoleProtectedRoute allowedRoles={["company"]}>
                {/* Here is the element of the path */}
              </RoleProtectedRoute>
            </ProtectedRoute>
          ),
        },
      ],
      errorElement: <ErrorElement />, //! and finally the error element
    },
    {
      path: "/reviewer",
      element: (
        <ProtectedRoute>
          <RoleProtectedRoute allowedRoles={["reviewer"]}>
            {/* <ReviewerDashboard /> */}
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    {
      path: "/inspector",
      element: (
        <ProtectedRoute>
          <RoleProtectedRoute allowedRoles={["inspector"]}>
            {/* <InspectorDashboard /> */}
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    { path: "/not-authorized", element: <NotAuthorized /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}
