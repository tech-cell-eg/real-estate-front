import { Outlet } from "react-router-dom";
import Layout from "../../UI/layout/Layout";
import {
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaCreditCard,
  FaRegBuilding,
  FaFileContract,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Index() {
  const sidebarTabs = [
    { label: "الرئيسية", link: "", icon: <FaHome /> },
    { label: "اضافه عقار", link: "add-property", icon: <FaUsers /> },
    { label: "عروض", link: "offers", icon: <FaProjectDiagram /> },
    { label: "طلبات", link: "requests", icon: <FaRegBuilding /> },
    { label: "المدفوعات", link: "payment", icon: <FaCreditCard /> },
    { label: "شروط وأحكام", link: "terms", icon: <FaFileContract /> },
    { label: "الإعدادات", link: "settings", icon: <FaCog /> },
    { label: "تسجيل الخروج", link: "logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <Layout sidebarTabs={sidebarTabs}>
      <Outlet />
    </Layout>
  );
}

export default Index;
