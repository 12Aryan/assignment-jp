import { useSelector } from "react-redux";
import ToggleIcon from "../../icons/ToggleIcon";
import ThemeToggler from "../theme-toggler/ThemeToggler";
import StarIcon from "../../icons/StarIcon";
import SearchIcon from "../../icons/SearchIcon";
import MacIcon from "../../icons/MacIcon";
import ClockIcon from "../../icons/ClockIcon";
import BellIcon from "../../icons/BellIcon";

const Header = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  return (
    <div className="flex py-4 px-8 justify-between items-center border-b border-[#1C1C1C1A] dark:border-[#FFFFFF1A] flex-wrap ">
      <div className="flex items-center gap-4 ">
        <div className="flex">
          <div
            title={"No actions attached to this button"}
            className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer "
          >
            <ToggleIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
          </div>
          <div
            title={"No actions attached to this button"}
            className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer  "
          >
            <StarIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-sm font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66]">
            Dashboards
          </div>
          <div className="text-sm font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66]">
            /
          </div>
          <div className="text-sm font-normal text-[#1C1C1C] dark:text-[#FFFFFF]">
            Default
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center h-7  bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A] px-2 py-1 rounded-lg">
          <div className="mr-1 ">
            <SearchIcon {...(mode === "dark" && { fill: "#a1a1a1" })} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-24 outline-none border-none placeholder:text-sm placeholder:font-normal placeholder:text-[#1C1C1C33] dark:placeholder:text-[#FFFFFF33]"
          />
          <div className="ml-1">
            <MacIcon {...(mode === "dark" && { fill: "#a1a1a1" })} />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ThemeToggler {...(mode === "dark" && { fill: "#FFFFFF" })} />

          <div
            title={"No actions attached to this button"}
            className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer "
          >
            <ClockIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
          </div>
          <div
            title={"No actions attached to this button"}
            className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer "
          >
            <BellIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
          </div>
          <div
            title={"No actions attached to this button"}
            className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer "
          >
            <ToggleIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
