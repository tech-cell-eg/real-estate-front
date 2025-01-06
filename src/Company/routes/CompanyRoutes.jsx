import ProtectedRoute from "../../navigation/ProtectedRoute";
import ErrorElement from "../../UI/errors/ErrorElement";
import Details from "../Pages/Details/Details";
import CompanyHome from "../Pages/Home/Home";
// import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import Index from "../pages/Index";
import Mybalance from "../Pages/Mybalance/Mybalance";
import Paid from "../Pages/paid/Paid";
import Seting from "../Pages/Setting/Seting";
import Team from "../Pages/Team/Team";
import TeamCard from "../Pages/Team/Team";
import TermsAndCondattions from "../Pages/TermsAndCondation/TermsAndCondattions";



const compantRoute = {
  path: "/company",
  element: (
    <ProtectedRoute>
      {/* <RoleProtectedRoute allowedRoles={["client"]}> */}
      <Index />
      {/* </RoleProtectedRoute> */}
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: [
    { index: true, element: <CompanyHome /> },
    {path:"team",element:<Team/>},
    {path:"settings",element:<Seting/>},
    {path:"terms",element:<TermsAndCondattions/>},
    {path:"projects",element:<Details/>},
    {path:"mybalance" ,element:<Mybalance/>},
    {path:"",element:<TeamCard/>},
    {path:"paid",element:<Paid/>},
    ,
  ],
};

export default compantRoute;
