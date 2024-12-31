import ProtectedRoute from "../../navigation/ProtectedRoute";
// import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import Index from "../pages/Index";
import ErrorElement from "../../UI/errors/ErrorElement";
import ClientHome from "../pages/ClientHome";
import AddProperty from "../pages/AddProperty";
import Terms from "../pages/Terms";
import ClientProfile from "../pages/ClientProfile";

const clientRoute = {
  path: "/client",
  element: (
    <ProtectedRoute>
      {/* <RoleProtectedRoute allowedRoles={["client"]}> */}
      <Index />
      {/* </RoleProtectedRoute> */}
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: [
    { index: true, element: <ClientHome/> },
    { path: "add-property", element: <AddProperty/> },
    { path: "offers", element: <div>Offers</div> },
    { path: "requests", element: <div>Requests</div> },
    { path: "payments", element: <div>Payments</div> },
    { path: "terms", element: <Terms/>},
    { path: "settings", element: <ClientProfile/> },
    { path: "logout", element: <div>Logout</div> },
  ],
};

export default clientRoute;
