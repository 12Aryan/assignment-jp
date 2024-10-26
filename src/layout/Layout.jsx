import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import RightSidebar from "../components/right-sidebar/RightSidebar";
import SidebarDrawer from "../components/sidebar/SidebarDrawer";
import { useState } from "react";

const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleSidebarDrawer, setToggleSidebarDrawer] = useState(false);
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
      {toggleSidebarDrawer && (
        <SidebarDrawer
          setToggleSidebar={setToggleSidebarDrawer}
          toggleSidebar={toggleSidebarDrawer}
        />
      )}
      <div className={`flex flex-col flex-1 w-full ${path !== "/order-list"?'xl:max-w-[calc(100vw-492px)]':'xl:max-w-[calc(100vw-212px)]' }`}>
        <Header
          setToggleSidebar={setToggleSidebar}
          setToggleSidebarDrawer={setToggleSidebarDrawer}
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
