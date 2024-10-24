import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className=" flex flex-1 flex-col ">
        <Header />
        <div className=" flex-1 px-9 py-8 bg-white dark:bg-[#1c1c1c] max-w-full overflow-y-auto scroll-hidden  ">
          <Outlet />
        </div>
      </div>
      <div className="flex flex-col h-screen w-[280px] px-5 py-6 gap-8 border-l border-[#1C1C1C1A] dark:border-[#FFFFFF1A] overflow-y-auto scroll-hidden">
        Notifications
      </div>
    </div>
  );
};

export default Layout;
