import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import RightSidebar from "../components/right-sidebar/RightSidebar";
import SidebarDrawer from "../components/sidebar/SidebarDrawer";
import { useState } from "react";

const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleNotificationBar, setToggleNotificationBar] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex h-screen">
      {toggleSidebar && (
        <Sidebar
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
      )}
      {toggleSidebar && (
        <SidebarDrawer
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
      )}
      <div className="flex flex-col flex-1 max-w-[calc(100vw-492px)] ">
        <Header
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
          toggleNotificationBar={toggleNotificationBar}
          setToggleNotificationBar={setToggleNotificationBar}
        />
        <div className="flex-1 max-w px-9 py-8 bg-white dark:bg-[#1c1c1c] overflow-y-auto scroll-hidden">
          <Outlet />
        </div>
      </div>
      {path !== "/order-list" && (
        <RightSidebar
          toggleNotificationBar={toggleNotificationBar}
          setToggleNotificationBar={setToggleNotificationBar}
        />
      )}
    </div>
  );
};

export default Layout;
