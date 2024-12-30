import ProtectedRoute from "../../navigation/ProtectedRoute";
import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import CLientHome from "../pages/ClientHome";
import ErrorElement from "../../UI/errors/ErrorElement";

const clientRoute = {
  path: "/client",
  element: (
    <ProtectedRoute>
      {/* <RoleProtectedRoute allowedRoles={["client"]}> */}
      <CLientHome />
      {/* </RoleProtectedRoute> */}
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: [
    { index: true, element: <div>Welcome Client</div> },
    { path: "add-property", element: <div>Add Property</div> },
    { path: "offers", element: <div>Offers</div> },
    { path: "requests", element: <div>Requests</div> },
    { path: "payments", element: <div>Payments</div> },
    { path: "terms", element: <div>Terms and Conditions</div> },
    { path: "settings", element: <div>Settings</div> },
    { path: "logout", element: <div>Logout</div> },
  ],
};

export default clientRoute;