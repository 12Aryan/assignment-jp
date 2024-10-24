import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className=" flex flex-1 flex-col ">
        <Header />
        <div className=" flex-1 px-9 py-8 bg-white dark:bg-[#1c1c1c] max-w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
