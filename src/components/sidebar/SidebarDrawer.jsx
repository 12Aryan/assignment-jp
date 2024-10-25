import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BlogsIcon from "../../icons/BlogsIcon";
import BookIcon from "../../icons/BookIcon";
import DashboardIcon from "../../icons/DashboardIcon";
import DotIcon from "../../icons/DotIcon";
import EcomIcon from "../../icons/EcomIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import ProjectIcon from "../../icons/ProjectIcon";
import DownArrow from "../../icons/DownArrow";
import RightArrow from "../../icons/RightArrow";
import BarIcon from "../../icons/BarIcon";
import UserIcons from "../../icons/UserIcons";
import AccountIcon from "../../icons/AccountIcon";
import CorporateIcon from "../../icons/CorporateIcon";
import SocialIcons from "../../icons/SocialIcons";
import { useSelector } from "react-redux";

const SidebarDrawer = ({ toggleSidebar, setToggleSidebar }) => {
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState(0);
  const [selectedItem, setSelectedItem] = useState("Default");
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedPageItem, setExpandedPageItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const mode = useSelector((state) => state.toggleTheme.theme);

  const DashboardItems = [
    {
      name: "Default",
      icon: <DashboardIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      path: "/",
      type: "link",
    },
    {
      name: "Order List",
      icon: <BlogsIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      path: "/order-list",
      type: "link",
    },
    {
      name: "eCommerce",
      icon: <EcomIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Products", "Categories"],
    },
    {
      name: "Projects",
      icon: <ProjectIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["List", "Users"],
    },
    {
      name: "Online Courses",
      icon: <BookIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Price", "Domain"],
    },
  ];

  const PagesItems = [
    {
      name: "User Profile",
      icon: <UserIcons {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Overview", "Projects", "Campaigns", "Document", "Followers"],
    },
    {
      name: "Account",
      icon: <AccountIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Campaigns", "Document"],
    },
    {
      name: "Corporate",
      icon: <CorporateIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Projects", "Followers"],
    },
    {
      name: "Blog",
      icon: <BlogsIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Campaigns", "Document", "Followers"],
    },
    {
      name: "Social",
      icon: <SocialIcons {...(mode === "dark" && { fill: "#FFFFFF" })} />,
      type: "tree",
      subItems: ["Document", "Followers"],
    },
  ];

  const handleHighlight = (index) => {
    setHighlight(index);
  };

  const handleClick = (item) => {
    setSelectedSubItem(null);
    setSelectedItem(item.name);
    item.type === "link"
      ? navigate(item.path)
      : setExpandedItem(expandedItem === item.name ? null : item.name);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
    setSelectedItem(null);
  };

  const handlePageClick = (item) => {
    setExpandedPageItem(expandedPageItem === item.name ? null : item.name);
  };

  const toggleDrawer = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div
      className={`fixed lg:hidden top-0 left-0 h-full w-64 transition-transform duration-300 ${
        toggleSidebar ? "translate-x-0" : "-translate-x-full"
      } bg-white dark:bg-gray-800 shadow-lg z-50`}
    >
      <button
        onClick={toggleDrawer}
        className="absolute top-4 right-4 text-gray-700 dark:text-white"
      >
        {toggleSidebar ? "x" : "Open"}
      </button>
      <div className="flex flex-col h-full min-w-[212px] px-5 py-6 gap-8 border-r border-[#1C1C1C1A] dark:border-[#FFFFFF1A] overflow-y-auto scroll-hidden">
        <div className="flex gap-2 items-center h-8 ">
          <ProfileIcon />
          <div className="font-normal text-sm text-[#1C1C1C] dark:text-[#FFFFFF] ">
            ByeWind
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-6 ">
            {["Favourites", "Recently"].map((item, index) => (
              <span
                key={item}
                className={`cursor-pointer font-normal text-sm ${
                  highlight === index
                    ? "text-[#1C1C1C66] dark:text-[#FFFFFF66]"
                    : "text-[#1C1C1C33] dark:text-[#FFFFFF33]"
                }`}
                onClick={() => handleHighlight(index)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {["Overview", "Projects"].map((item) => (
              <div
                className="flex items-center gap-1 text-[#1C1C1C] dark:text-[#FFFFFF]"
                key={item}
              >
                <DotIcon {...(mode === "dark" && { fill: "#a1a1a1" })} />
                <span className="font-normal text-sm ">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-normal text-sm text-[#1C1C1C66] dark:text-[#FFFFFF66]">
            Dashboards
          </div>
          <div className="flex flex-col ">
            {DashboardItems.map((item) => (
              <div key={item.name}>
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-lg relative ${
                    selectedItem === item.name
                      ? "bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]"
                      : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {selectedItem === item.name && (
                    <div className="absolute left-0">
                      <BarIcon {...(mode === "dark" && { fill: "#C6C7F8" })} />
                    </div>
                  )}
                  {item.type === "tree" ? (
                    expandedItem === item.name ? (
                      <DownArrow
                        {...(mode === "dark" && { fill: "#a1a1a1" })}
                      />
                    ) : (
                      <RightArrow
                        {...(mode === "dark" && { fill: "#a1a1a1" })}
                      />
                    )
                  ) : (
                    <div className="h-4 w-4" />
                  )}
                  <div className="ml-1">{item.icon}</div>
                  <div className="font-normal text-sm ml-1 text-[#1C1C1C ] dark:text-[#FFFFFF]">
                    {item.name}
                  </div>
                </div>
                {item.type === "tree" && expandedItem === item.name && (
                  <div>
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem}
                        className={`flex py-1 px-[51px] cursor-pointer rounded-lg font-normal text-sm text-[#1C1C1C ] dark:text-[#FFFFFF] ${
                          selectedSubItem === subItem
                            ? "bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]"
                            : ""
                        }`}
                        onClick={() => handleSubItemClick(subItem)}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-normal text-sm text-[#1C1C1C66] dark:text-[#FFFFFF66]">
            Pages
          </div>
          <div className="flex flex-col">
            {PagesItems.map((item) => (
              <div key={item.name}>
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-lg relative ${
                    expandedPageItem === item.name
                      ? "bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]"
                      : ""
                  }`}
                  onClick={() => handlePageClick(item)}
                >
                  {expandedPageItem === item.name && (
                    <div className="absolute left-0">
                      <BarIcon {...(mode === "dark" && { fill: "#C6C7F8" })} />
                    </div>
                  )}
                  {expandedPageItem === item.name ? (
                    <DownArrow {...(mode === "dark" && { fill: "#a1a1a1" })} />
                  ) : (
                    <RightArrow {...(mode === "dark" && { fill: "#a1a1a1" })} />
                  )}
                  <div className="ml-1">{item.icon}</div>
                  <div className="font-normal text-sm ml-1 text-[#1C1C1C ] dark:text-[#FFFFFF]">
                    {item.name}
                  </div>
                </div>
                {expandedPageItem === item.name && (
                  <div>
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem}
                        className="flex py-1 px-[51px] cursor-pointer rounded-lg font-normal text-sm text-[#1C1C1C ] dark:text-[#FFFFFF]"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
