import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import RightSidebar from "../components/right-sidebar/RightSidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 max-w-[calc(100vw-492px)]">
        <Header />
        <div className="flex-1 max-w px-9 py-8 bg-white dark:bg-[#1c1c1c] overflow-y-auto scroll-hidden">
          <Outlet />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Layout;
