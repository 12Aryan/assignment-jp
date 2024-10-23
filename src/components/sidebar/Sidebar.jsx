import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BlogsIcon from "../../icons/BlogsIcon";
import BookIcon from "../../icons/BookIcon";
import DashboardIcon from "../../icons/DashboardIcon";
import DotIcon from "../../icons/DotIcon";
import EcomIcon from "../../icons/EcomIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import ProjectIcon from "../../icons/ProjectIcon";

const DashboardItems = [
  {
    name: "Default",
    icon: <DashboardIcon />,
    path: "/",
    type: "link"
  },
  {
    name: "Order List",
    icon: <BlogsIcon />,
    path: "/order-list",
    type: "link"
  },
  {
    name: "eCommerce",
    icon: <EcomIcon />,
    type: "tree",
    subItems: ["Sub-item 1", "Sub-item 2"]
  },
  {
    name: "Projects",
    icon: <ProjectIcon />,
    type: "tree",
    subItems: ["Sub-item 1", "Sub-item 2"]
  },
  {
    name: "Online Courses",
    icon: <BookIcon />,
    type: "tree",
    subItems: ["Sub-item 1", "Sub-item 2"]
  }
];

const PagesItems = [
  {
    name: "Pages eCommerce",
    icon: <EcomIcon />,
    type: "tree",
    subItems: ["Page Sub-item 1", "Page Sub-item 2"]
  },
  {
    name: "Pages Projects",
    icon: <ProjectIcon />,
    type: "tree",
    subItems: ["Page Sub-item 1", "Page Sub-item 2"]
  },
  {
    name: "Pages Online Courses",
    icon: <BookIcon />,
    type: "tree",
    subItems: ["Page Sub-item 1", "Page Sub-item 2"]
  }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState(0);
  const [selectedItem, setSelectedItem] = useState("Default");
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedPageItem, setExpandedPageItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleHighlight = index => {
    setHighlight(index);
  };

  const handleClick = item => {
    setSelectedSubItem(null);
    setSelectedItem(item.name);
    item.type === "link"
      ? navigate(item.path)
      : setExpandedItem(expandedItem === item.name ? null : item.name);
  };

  const handleSubItemClick = subItem => {
    setSelectedSubItem(subItem);
    setSelectedItem(null);
  };

  const handlePageClick = item => {
    setExpandedPageItem(expandedPageItem === item.name ? null : item.name);
  };

  return (
    <div className="h-screen px-4 py-5 border-r border-[#1C1C1C1A] dark:border-[#FFFFFF1A] flex flex-col gap-4 bg-white dark:bg-[#1c1c1c] overflow-y-auto scroll-hidden">
      <div className="flex gap-2 items-center">
        <ProfileIcon />
        <div className="font-normal text-sm text-[#1C1C1C] dark:text-[#FFFFFF] ">
          ByeWind
        </div>
      </div>

      <div className="flex gap-2  text-sm text-[#1C1C1C66] dark:text-[#FFFFFF66]">
        {["Favourites", "Recently"].map((item, index) =>
          <span
            key={item}
            className={`cursor-pointer ${highlight === index
              ? "text-[#1C1C1C66] dark:text-[#FFFFFF66]"
              : "text-[#1C1C1C66] dark:text-[#FFFFFF33]"}`}
            onClick={() => handleHighlight(index)}
          >
            {item}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        {["Overview", "Projects"].map(item =>
          <div
            className="flex items-center gap-1 text-[#1C1C1C ] dark:text-[#FFFFFF]"
            key={item}
          >
            <DotIcon />
            <span className="font-normal text-sm ">
              {item}
            </span>
          </div>
        )}
      </div>

      <div className="font-normal text-sm text-[#1C1C1C66]">Dashboards</div>
      <div className="flex flex-col gap-2">
        {DashboardItems.map(item =>
          <div key={item.name}>
            <div
              className={`flex items-center p-2 cursor-pointer rounded ${selectedItem ===
              item.name
                ? "bg-[#1C1C1C0D]"
                : ""}`}
              onClick={() => handleClick(item)}
            >
              {item.type === "tree" &&
                <span className="text-sm">
                  {expandedItem === item.name ? "V" : ">"}
                </span>}
              {item.icon}
              <div className="ml-2 font-normal text-sm text-[#1C1C1C ] dark:text-[#FFFFFF]  ">
                {item.name}
              </div>
            </div>
            {item.type === "tree" &&
              expandedItem === item.name &&
              <div className="ml-6 mt-2">
                {item.subItems.map(subItem =>
                  <div
                    key={subItem}
                    className={`flex p-2 cursor-pointer rounded ${selectedSubItem ===
                    subItem
                      ? "bg-gray-200"
                      : ""}`}
                    onClick={() => handleSubItemClick(subItem)}
                  >
                    {subItem}
                  </div>
                )}
              </div>}
          </div>
        )}
      </div>

      <div className="font-normal text-sm text-[#1C1C1C66]">Pages</div>
      <div className="flex flex-col gap-2">
        {PagesItems.map(item =>
          <div key={item.name}>
            <div
              className={`flex items-center p-2 cursor-pointer rounded ${expandedPageItem ===
              item.name
                ? "bg-[#1C1C1C0D]"
                : ""}`}
              onClick={() => handlePageClick(item)}
            >
              <span className="text-sm">
                {expandedPageItem === item.name ? "V" : ">"}
              </span>
              {item.icon}
              <div className="ml-2 font-normal text-sm text-[#1C1C1C ] dark:text-[#FFFFFF]  ">
                {item.name}
              </div>
            </div>
            {expandedPageItem === item.name &&
              <div className="ml-6 mt-2">
                {item.subItems.map(subItem =>
                  <div
                    key={subItem}
                    className={`flex p-2 cursor-pointer rounded font-normal text-sm text-[#1C1C1C ] dark:text-[#FFFFFF] ${selectedSubItem ===
                    subItem
                      ? "bg-gray-200"
                      : ""}`}
                    onClick={() => handleSubItemClick(subItem)}
                  >
                    {subItem}
                  </div>
                )}
              </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
