import ProtectedRoute from "../../navigation/ProtectedRoute";
// import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import Index from "../pages/Index";
import ErrorElement from "../../UI/errors/ErrorElement";
import ClientHome from "../pages/ClientHome";
import AddProperty from "../pages/AddProperty";
import Terms from "../pages/Terms";
import ClientProfile from "../pages/ClientProfile";
import Offers from "../pages/Offers";
import OfferDetails from "../pages/OfferDetails";
import AcceptedOfferDetails from "../pages/AcceptedOfferDetails";

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
    { path: "offers",
      children:[
        {index:true,  element: <Offers/> },
        {path:"details", element: <OfferDetails/>},
        {path :"accepted-offer-details", element: <AcceptedOfferDetails/>},
      ]
     },
    { path: "requests", element: <div>Requests</div> },
    { path: "payments", element: <div>Payments</div> },
    { path: "terms", element: <Terms/>},
    { path: "settings", element: <ClientProfile/> },
    { path: "logout", element: <div>Logout</div> },
  ],
};

export default clientRoute;
