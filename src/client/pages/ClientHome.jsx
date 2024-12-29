import Layout from "../../Home/Layout";
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

function Home() {
  const sidebarTabs = [
    { label: "الرئيسية", link: "", icon: <FaHome /> },
    { label: "اضافه عقار", link: "", icon: <FaUsers /> },
    { label: "عروض", link: "/projects", icon: <FaProjectDiagram /> },
    { label: "طلبات", link: "/balance", icon: <FaRegBuilding /> },
    { label: "المدفوعات", link: "/payments", icon: <FaCreditCard /> },
    { label: "شروط وأحكام", link: "/terms", icon: <FaFileContract /> },
    { label: "الإعدادات", link: "/settings", icon: <FaCog /> },
    { label: "تسجيل الخروج", link: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <Layout sidebarTabs={sidebarTabs}>
      <div>Hello Qaim</div>
    </Layout>
  );
}

export default Home;
