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
import Inspector from "./inspector/pages/Inspector";
import compantRoute from "./Company/routes/CompanyRoutes";
import clientRoute from "./client/routes/ClientRoute";
import Login from "./Auth/components/Login";
import Register from "./Auth/components/Register";
import CustomerRegister from "./Auth/components/CustomerRegister";
import CompanyRegister from "./Auth/components/CompanyRegister";
import InspectorRegister from "./Auth/components/InspectorRegister";
import TermsAndCondattions from "./Company/Pages/TermsAndCondation/TermsAndCondattions";
import Details from "./Company/Pages/Details/Details";
import Mybalance from "./Company/Pages/Mybalance/Mybalance";
import Paid from "./Company/Pages/paid/paid";
import Team from "./Company/Pages/Team/Team";
import Seting from "./Company/Pages/Setting/Seting";


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "customerRegister", element: <CustomerRegister /> },
        { path: "evaluationCompanyRegister", element: <CompanyRegister /> },
        { path: "inspectorRegister", element: <InspectorRegister /> },
      ],
      errorElement: <ErrorElement />,
    },
    clientRoute,
    compantRoute,
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
            <Inspector />
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
