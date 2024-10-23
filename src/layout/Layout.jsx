// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 bg-white dark:bg-[#1c1c1c] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
