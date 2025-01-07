import ProtectedRoute from "../../navigation/ProtectedRoute";
// import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import ErrorElement from "../../UI/errors/ErrorElement";
import Index from "../pages/Index";
// import Terms from "../pages/Terms";

// import Logout from "../pages/Logout";
import Requests from "../pages/Requests";

import Inspector from "../pages/Inspector";

const InspectorRoute = {
  path: "/inspector",
  element: (
    <ProtectedRoute>
      {/* <RoleProtectedRoute allowedRoles={["inspector"]}> */}
      <Index />
      {/* </RoleProtectedRoute> */}
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: [
    { index: true, element: <Inspector /> },
    // { path: "add-property", element: <AddProperty /> },
    // {
    //   path: "offers",
    //   children: [
    //     { index: true, element: <Offers /> },
    //     { path: "details", element: <OfferDetails /> },
    //     { path: "accepted-offer-details", element: <AcceptedOfferDetails /> },
    //   ],
    // },
    { path: "requests", element: <Requests /> },
    // {
    //   path: "payment",
    //   children: [
    //     { index: true, element: <Payment /> },
    //     { path: "payment-details", element: <PaymentDetails /> },
    //     { path: "payment-data", element: <PaymentData /> },
    //   ],
    // },
    // { path: "terms", element: <Terms /> },
    // { path: "settings", element: <ClientProfile /> },
    // { path: "logout", element: <Logout /> },
  ],
};

export default InspectorRoute;
