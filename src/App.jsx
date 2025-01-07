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

// ! You can find an example for routing for your flow in company role
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
import Index from "./inspector/pages/Index";
import InspectorRoute from "./inspector/inspector-route/InspectorRoute";
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
    {
      path: "company",
      element: (
        <ProtectedRoute>
          {/* <RoleProtectedRoute allowedRoles={["company"]}> */}
          <CompanyHome />
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
        { index: true, element: <CompanyHome /> },
        { path: "terms", element: <TermsAndCondattions /> },
        { path: "details", element: <Details /> },
        { path: "mybalance", element: <Mybalance /> },
        { path: "paid", element: <Paid /> },
        { path: "team", element: <Team /> },
        { path: "setting", element: <Seting /> },
      ],
    },
    {
      path: "/reviewer",
      element: (
        <ProtectedRoute>
          {/* <RoleProtectedRoute allowedRoles={["reviewer"]}> */}
          {/* <ReviewerDashboard /> */}
          {/* </RoleProtectedRoute> */}
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    // {
    //   path: "/inspector",
    //   element: (
    //     <ProtectedRoute>
    //       {/* <RoleProtectedRoute allowedRoles={["inspector"]}> */}
    //       {/* <InspectorDashboard /> */}
    //       <InspectorRoute />
    //       {/* </RoleProtectedRoute> */}
    //     </ProtectedRoute>
    //   ),
    //   errorElement: <ErrorElement />,
    // },
    InspectorRoute,
    { path: "/not-authorized", element: <NotAuthorized /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}
